import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';

const streamPipeline = promisify(pipeline);

const drive = google.drive('v3');

export const downloadFolder = async (folderId: string, localPath: string, apiKey: string) => {
    if (!fs.existsSync(localPath)) {
        fs.mkdirSync(localPath, { recursive: true });
    }

    const driveClient = google.drive({
        version: 'v3',
        auth: apiKey
    });

    try {
        let pageToken: string | undefined = undefined;
        do {
            const res: any = await driveClient.files.list({
                q: `'${folderId}' in parents and trashed = false`,
                fields: 'nextPageToken, files(id, name, mimeType)',
                pageToken: pageToken,
                key: apiKey
            });

            const files = res.data.files;
            if (files && files.length > 0) {
                for (const file of files) {
                    const safeName = file.name!.replace(/[^a-z0-9.]/gi, '_');
                    const targetPath = path.join(localPath, safeName);

                    if (file.mimeType === 'application/vnd.google-apps.folder') {
                        console.log(`Found folder: ${file.name}`);
                        await downloadFolder(file.id!, targetPath, apiKey);
                    } else {
                        console.log(`Found file: ${file.name}`);
                        await downloadFile(driveClient, file.id!, targetPath);
                    }
                }
            }
            pageToken = res.data.nextPageToken || undefined;
        } while (pageToken);
    } catch (error) {
        console.error('Error listing files:', error);
        throw error;
    }
};

const downloadFile = async (driveClient: any, fileId: string, destPath: string) => {
    try {
        const dest = fs.createWriteStream(destPath);
        const res = await driveClient.files.get(
            { fileId, alt: 'media' },
            { responseType: 'stream' }
        );
        
        await streamPipeline(res.data, dest);
        console.log(`Downloaded: ${destPath}`);
    } catch (error) {
        console.error(`Error downloading file ${fileId}:`, error);
    }
};
