
import { initDatabase } from '../db/database';

const papersToRegenerate = [
    // Chapter 2: File Management
    {
        title: "Computer Practice Paper - Chapter 2: File Management: Organisation of Data - Set A",
        content: {
            "title": "Computer Practice Paper - Chapter 2: File Management: Organisation of Data - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "A collection of related information stored together is called a:", "options": ["Folder", "File", "Drive", "Icon"], "answer": "File", "marks": 1 },
                        { "id": 2, "question": "Which of these is a wild card character?", "options": ["#", "@", "*", "&"], "answer": "*", "marks": 1 },
                        { "id": 3, "question": "Moving a file means:", "options": ["Copying it", "Deleting it", "Shifting it to a new location", "Renaming it"], "answer": "Shifting it to a new location", "marks": 1 },
                        { "id": 4, "question": "The extension of a PowerPoint file is:", "options": [".docx", ".xlsx", ".pptx", ".txt"], "answer": ".pptx", "marks": 1 },
                        { "id": 5, "question": "Which shortcut key is used to copy a file?", "options": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"], "answer": "Ctrl + C", "marks": 1 },
                        { "id": 6, "question": "A folder inside another folder is called a:", "options": ["Mini folder", "Sub-folder", "File", "Drive"], "answer": "Sub-folder", "marks": 1 },
                        { "id": 7, "question": "To select non-adjacent files, we hold down the:", "options": ["Shift key", "Ctrl key", "Alt key", "Tab key"], "answer": "Ctrl key", "marks": 1 },
                        { "id": 8, "question": "Which view displays files as a list with details?", "options": ["Large icons", "List", "Details", "Tiles"], "answer": "Details", "marks": 1 },
                        { "id": 9, "question": "The extension .mp3 represents:", "options": ["Image file", "Audio file", "Video file", "Text file"], "answer": "Audio file", "marks": 1 },
                        { "id": 10, "question": "Deleted files go to the:", "options": ["My Documents", "Recycle Bin", "Desktop", "Control Panel"], "answer": "Recycle Bin", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a file extension?", "marks": 1, "answer": "It is a suffix at the end of a filename that indicates the type of file." },
                        { "id": 12, "question": "Name the two wild card characters.", "marks": 1, "answer": "* (Asterisk) and ? (Question mark)." },
                        { "id": 13, "question": "What is the shortcut to paste a file?", "marks": 1, "answer": "Ctrl + V." },
                        { "id": 14, "question": "Define a folder.", "marks": 1, "answer": "A container used to store files and other sub-folders." },
                        { "id": 15, "question": "Which device is used to transfer data from one computer to another?", "marks": 1, "answer": "Pen drive (or CD/DVD/External Hard Disk)." },
                        { "id": 16, "question": "What does the extension .jpg stand for?", "marks": 1, "answer": "Joint Photographic Experts Group (Image file)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Copying and Moving a file.", "marks": 6, "answer": "Copying vs Moving:\n1. Copying: Creates a duplicate of the file. The file remains in the original location and also appears in the new location. (Ctrl+C -> Ctrl+V)\n2. Moving: Shifts the file from one location to another. The file is removed from the original location. (Ctrl+X -> Ctrl+V)" },
                        { "id": 18, "question": "Explain the use of Wild Card characters.", "marks": 6, "answer": "Wild Card characters are used to search for files when we don't know the exact name.\n1. * (Asterisk): Substitutes for zero or more characters. Ex: *.docx searches for all Word files.\n2. ? (Question Mark): Substitutes for a single character. Ex: Class?.docx matches Class1.docx, ClassA.docx, etc." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write the steps to transfer data from a Pen Drive to a Computer.", "marks": 6, "answer": "Steps:\n1. Plug the Pen Drive into the USB port.\n2. Open 'This PC' or 'My Computer'.\n3. Double-click on the Pen Drive icon to open it.\n4. Select the files you want to copy.\n5. Right-click and select 'Copy' (or press Ctrl+C).\n6. Navigate to the destination folder on your computer.\n7. Right-click and select 'Paste' (or press Ctrl+V)." },
                        { "id": 20, "question": "Why is file management important?", "marks": 6, "answer": "Importance of File Management:\n1. Organization: Keeps data organized in folders for easy access.\n2. Efficiency: Saves time in searching for files.\n3. Space Management: Helps identify and delete unwanted files to save space.\n4. Security: Helps in backing up important data.\n5. Separation: Keeps system files separate from user files to prevent accidental deletion." }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 2: File Management: Organisation of Data - Set B",
        content: {
            "title": "Computer Practice Paper - Chapter 2: File Management: Organisation of Data - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which file format is used for video files?", "options": [".mp3", ".mp4", ".jpg", ".txt"], "answer": ".mp4", "marks": 1 },
                        { "id": 2, "question": "To rename a file, we can press:", "options": ["F1", "F2", "F5", "F12"], "answer": "F2", "marks": 1 },
                        { "id": 3, "question": "Which of these is an output device?", "options": ["Keyboard", "Mouse", "Monitor", "Scanner"], "answer": "Monitor", "marks": 1 },
                        { "id": 4, "question": "The primary storage area in a computer is:", "options": ["Hard Disk", "Pen Drive", "CD", "Floppy"], "answer": "Hard Disk", "marks": 1 },
                        { "id": 5, "question": "To select all files in a folder, press:", "options": ["Ctrl + A", "Ctrl + S", "Ctrl + X", "Ctrl + P"], "answer": "Ctrl + A", "marks": 1 },
                        { "id": 6, "question": "Which symbol cannot be used in a filename?", "options": ["_", "-", " ", "?"], "answer": "?", "marks": 1 },
                        { "id": 7, "question": "A file with extension .xlsx is created in:", "options": ["MS Word", "MS Excel", "MS PowerPoint", "Paint"], "answer": "MS Excel", "marks": 1 },
                        { "id": 8, "question": "The bar at the bottom of the desktop is called:", "options": ["Title Bar", "Taskbar", "Menu Bar", "Scroll Bar"], "answer": "Taskbar", "marks": 1 },
                        { "id": 9, "question": "Which option is used to burn data onto a CD?", "options": ["Copy to CD", "Burn to disc", "Move to CD", "Paste to CD"], "answer": "Burn to disc", "marks": 1 },
                        { "id": 10, "question": "Sorting files means arranging them by:", "options": ["Name", "Size", "Date", "All of these"], "answer": "All of these", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the full form of JPEG?", "marks": 1, "answer": "Joint Photographic Experts Group." },
                        { "id": 12, "question": "Name the shortcut key to cut a file.", "marks": 1, "answer": "Ctrl + X." },
                        { "id": 13, "question": "What is the use of the Search box?", "marks": 1, "answer": "To find files or folders stored in the computer." },
                        { "id": 14, "question": "Which extension is used for text files?", "marks": 1, "answer": ".txt" },
                        { "id": 15, "question": "What happens when you delete a file from the Recycle Bin?", "marks": 1, "answer": "It is permanently deleted from the computer." },
                        { "id": 16, "question": "Name one storage device.", "marks": 1, "answer": "Hard Disk (or Pen Drive/SSD)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How can you search for all image files on your computer?", "marks": 6, "answer": "To search for all image files:\n1. Open File Explorer.\n2. Click on the Search box.\n3. Type the wild card query for images, such as *.jpg or *.png.\n4. Press Enter.\n5. The computer will list all files ending with that extension." },
                        { "id": 18, "question": "Write the steps to create a new folder on the desktop.", "marks": 6, "answer": "Steps to create a folder:\n1. Right-click on a blank area of the desktop.\n2. A context menu appears.\n3. Select 'New' -> 'Folder'.\n4. A new folder icon appears with a highlighted name.\n5. Type a name for the folder and press Enter." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the different ways to view files in Windows Explorer.", "marks": 6, "answer": "File Views:\n1. Extra Large/Large/Medium/Small Icons: Shows files as icons of different sizes. Good for images.\n2. List: Shows files in a list format without details.\n3. Details: Shows files with columns for Name, Date Modified, Type, and Size.\n4. Tiles: Shows icons with some information next to them.\n5. Content: Shows content-based information." },
                        { "id": 20, "question": "What are the advantages of using a Pen Drive?", "marks": 6, "answer": "Advantages of Pen Drive:\n1. Portability: Small and easy to carry.\n2. Capacity: Can store a large amount of data (GBs).\n3. Durability: No moving parts, so less likely to break than CDs.\n4. Ease of Use: Plug and play (USB).\n5. Rewritable: Data can be added, deleted, and modified easily." }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 2: File Management: Organisation of Data - Set C",
        content: {
            "title": "Computer Practice Paper - Chapter 2: File Management: Organisation of Data - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which key is used to delete a file permanently without sending it to Recycle Bin?", "options": ["Delete", "Shift + Delete", "Ctrl + Delete", "Alt + Delete"], "answer": "Shift + Delete", "marks": 1 },
                        { "id": 2, "question": "The file extension .bmp stands for:", "options": ["Bitmap", "Binary Map", "Basic Map", "Big Map"], "answer": "Bitmap", "marks": 1 },
                        { "id": 3, "question": "Which of these is an audio file format?", "options": [".wav", ".png", ".pdf", ".html"], "answer": ".wav", "marks": 1 },
                        { "id": 4, "question": "To open a file, we usually:", "options": ["Single click", "Double click", "Right click", "Drag it"], "answer": "Double click", "marks": 1 },
                        { "id": 5, "question": "The left pane of File Explorer is called:", "options": ["Navigation Pane", "Preview Pane", "Details Pane", "Menu Pane"], "answer": "Navigation Pane", "marks": 1 },
                        { "id": 6, "question": "Which character matches any single character in a search?", "options": ["*", "?", "$", "#"], "answer": "?", "marks": 1 },
                        { "id": 7, "question": "A file path shows:", "options": ["File size", "File location", "File type", "File content"], "answer": "File location", "marks": 1 },
                        { "id": 8, "question": "Which of these is NOT a storage unit?", "options": ["Byte", "Kilobyte", "Megabyte", "Pixel"], "answer": "Pixel", "marks": 1 },
                        { "id": 9, "question": "The shortcut to undo an action is:", "options": ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + D"], "answer": "Ctrl + Z", "marks": 1 },
                        { "id": 10, "question": "Grouping files helps in:", "options": ["Deleting them", "Categorizing them", "Renaming them", "Copying them"], "answer": "Categorizing them", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the function of the Recycle Bin?", "marks": 1, "answer": "It stores deleted files temporarily, allowing them to be restored if needed." },
                        { "id": 12, "question": "Name the extension for a Word document.", "marks": 1, "answer": ".docx" },
                        { "id": 13, "question": "What is a sub-folder?", "marks": 1, "answer": "A folder created inside another folder." },
                        { "id": 14, "question": "Which key is used to refresh the window?", "marks": 1, "answer": "F5." },
                        { "id": 15, "question": "What does PDF stand for?", "marks": 1, "answer": "Portable Document Format." },
                        { "id": 16, "question": "How do you select adjacent files?", "marks": 1, "answer": "Click the first file, hold Shift, and click the last file." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain how to restore a deleted file from the Recycle Bin.", "marks": 6, "answer": "Steps to restore:\n1. Open the Recycle Bin by double-clicking its icon on the desktop.\n2. Locate the file you want to restore.\n3. Right-click on the file.\n4. Select 'Restore' from the menu.\n5. The file will disappear from the Recycle Bin and reappear in its original location." },
                        { "id": 18, "question": "What is the difference between a File and a Folder?", "marks": 6, "answer": "File vs Folder:\n1. File: A collection of data (text, image, music) stored with a name. It has an extension.\n2. Folder: A container used to store files and other folders. It does not usually have an extension.\n3. Analogy: Folder is like a bag; Files are the items inside the bag." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the various ways to sort files.", "marks": 6, "answer": "Sorting Files:\nWe can sort files by right-clicking in the folder -> Sort by:\n1. Name: Alphabetical order (A-Z or Z-A).\n2. Date modified: By the date they were last changed (Newest first or Oldest first).\n3. Type: Groups files by their application (all Word docs together, all images together).\n4. Size: By file size (Smallest to Largest or vice versa)." },
                        { "id": 20, "question": "Explain the concept of File Formats with examples.", "marks": 6, "answer": "File Formats:\n- A file format is a standard way that information is encoded for storage in a computer file.\n- It is identified by the extension.\nExamples:\n1. Text: .txt, .docx (Word)\n2. Image: .jpg, .png, .bmp\n3. Audio: .mp3, .wav\n4. Video: .mp4, .avi\n5. Presentation: .pptx" }
                    ]
                }
            ]
        }
    },
    // Chapter 5: Presentation: Visual Effects
    {
        title: "Computer Practice Paper - Chapter 5: Presentation: Visual Effects - Set A",
        content: {
            "title": "Computer Practice Paper - Chapter 5: Presentation: Visual Effects - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Special effects used to introduce slides in a presentation are called:", "options": ["Animations", "Transitions", "Designs", "Layouts"], "answer": "Transitions", "marks": 1 },
                        { "id": 2, "question": "Which view is best for reordering slides?", "options": ["Normal View", "Slide Sorter View", "Reading View", "Notes Page View"], "answer": "Slide Sorter View", "marks": 1 },
                        { "id": 3, "question": "The shortcut key to start a slideshow from the beginning is:", "options": ["F5", "Shift + F5", "F1", "Esc"], "answer": "F5", "marks": 1 },
                        { "id": 4, "question": "Animation effects are applied to:", "options": ["Slides only", "Objects on the slide", "File menu", "Status bar"], "answer": "Objects on the slide", "marks": 1 },
                        { "id": 5, "question": "Which tab contains the Transition options?", "options": ["Home", "Insert", "Transitions", "Animations"], "answer": "Transitions", "marks": 1 },
                        { "id": 6, "question": "To stop a slideshow, press:", "options": ["Enter", "Spacebar", "Esc", "Ctrl"], "answer": "Esc", "marks": 1 },
                        { "id": 7, "question": "Which of these is NOT an animation effect category?", "options": ["Entrance", "Emphasis", "Exit", "Slide"], "answer": "Slide", "marks": 1 },
                        { "id": 8, "question": "The default view in PowerPoint is:", "options": ["Normal", "Slide Sorter", "Slide Show", "Reading"], "answer": "Normal", "marks": 1 },
                        { "id": 9, "question": "We can insert audio from:", "options": ["Insert Tab", "Home Tab", "Design Tab", "View Tab"], "answer": "Insert Tab", "marks": 1 },
                        { "id": 10, "question": "Action buttons are found in:", "options": ["Shapes", "SmartArt", "Charts", "Tables"], "answer": "Shapes", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define Slide Transition.", "marks": 1, "answer": "The visual effect that occurs when you move from one slide to the next during a presentation." },
                        { "id": 12, "question": "What is Custom Animation?", "marks": 1, "answer": "A set of effects applied to objects (text/images) on a slide to control how they appear/move." },
                        { "id": 13, "question": "Name the view used to edit individual slides.", "marks": 1, "answer": "Normal View." },
                        { "id": 14, "question": "What is the use of the Animation Pane?", "marks": 1, "answer": "To view and manage the list of animations applied to the current slide." },
                        { "id": 15, "question": "Can we add sound to a transition?", "marks": 1, "answer": "Yes." },
                        { "id": 16, "question": "What is a slide show?", "marks": 1, "answer": "The full-screen presentation of slides in sequence." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Transitions and Animations.", "marks": 6, "answer": "Transitions vs Animations:\n1. Transitions: Applied to the SLIDE itself. Occur when moving between slides. (e.g., Fade, Push, Wipe).\n2. Animations: Applied to OBJECTS (text, images, shapes) ON the slide. Occur while the slide is displayed. (e.g., Fly In, Spin, Zoom)." },
                        { "id": 18, "question": "Explain the four types of Animation effects.", "marks": 6, "answer": "Types of Animation:\n1. Entrance: How an object enters the slide (e.g., Fly In).\n2. Emphasis: Draws attention to an object already on the slide (e.g., Pulse, Spin).\n3. Exit: How an object leaves the slide (e.g., Fly Out).\n4. Motion Paths: Moves the object along a specific path (e.g., Line, Circle)." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write the steps to insert a video clip into a slide.", "marks": 6, "answer": "Steps to insert video:\n1. Click on the 'Insert' tab.\n2. In the 'Media' group, click on the 'Video' drop-down arrow.\n3. Select 'Video on My PC' (or Online Video).\n4. The 'Insert Video' dialog box appears.\n5. Locate and select the video file.\n6. Click 'Insert'. The video appears on the slide." },
                        { "id": 20, "question": "Describe the different views in PowerPoint.", "marks": 6, "answer": "PowerPoint Views:\n1. Normal View: Main editing view with slide pane and thumbnail pane.\n2. Slide Sorter View: Displays thumbnails of all slides; good for reordering.\n3. Notes Page View: Shows the slide with speaker notes below it.\n4. Reading View: Shows the presentation in a window with controls.\n5. Slide Show View: Full-screen view for presenting to an audience." }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 5: Presentation: Visual Effects - Set B",
        content: {
            "title": "Computer Practice Paper - Chapter 5: Presentation: Visual Effects - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which feature allows you to record voice narration?", "options": ["Record Slide Show", "Rehearse Timings", "Screen Recording", "Audio on PC"], "answer": "Record Slide Show", "marks": 1 },
                        { "id": 2, "question": "Action buttons are used to:", "options": ["Play sounds", "Link to other slides", "Run programs", "All of these"], "answer": "All of these", "marks": 1 },
                        { "id": 3, "question": "To duplicate a slide, press:", "options": ["Ctrl + D", "Ctrl + C", "Ctrl + M", "Ctrl + N"], "answer": "Ctrl + D", "marks": 1 },
                        { "id": 4, "question": "Which key starts the slideshow from the CURRENT slide?", "options": ["F5", "Shift + F5", "Alt + F5", "Ctrl + F5"], "answer": "Shift + F5", "marks": 1 },
                        { "id": 5, "question": "The 'Rehearse Timings' feature is in the:", "options": ["Slide Show Tab", "Animations Tab", "Transitions Tab", "View Tab"], "answer": "Slide Show Tab", "marks": 1 },
                        { "id": 6, "question": "Which file format is a PowerPoint Show?", "options": [".pptx", ".ppsx", ".potx", ".pdf"], "answer": ".ppsx", "marks": 1 },
                        { "id": 7, "question": "To hide a slide during a show, use:", "options": ["Delete Slide", "Hide Slide", "Remove Slide", "Cut Slide"], "answer": "Hide Slide", "marks": 1 },
                        { "id": 8, "question": "Which option makes the presentation run continuously in a loop?", "options": ["Loop continuously until 'Esc'", "Repeat", "Cycle", "Forever"], "answer": "Loop continuously until 'Esc'", "marks": 1 },
                        { "id": 9, "question": "We can add a hyperlink to:", "options": ["Text", "Images", "Shapes", "All of these"], "answer": "All of these", "marks": 1 },
                        { "id": 10, "question": "The duration of a transition is set in:", "options": ["Seconds", "Minutes", "Hours", "Frames"], "answer": "Seconds", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is an Action Button?", "marks": 1, "answer": "A built-in shape that you can add to a presentation to link to another slide, play a sound, or perform an action." },
                        { "id": 12, "question": "What is the use of Rehearse Timings?", "marks": 1, "answer": "To record the time spent on each slide to set automatic timings for the show." },
                        { "id": 13, "question": "How do you insert a new slide?", "marks": 1, "answer": "Home Tab -> New Slide (or Ctrl + M)." },
                        { "id": 14, "question": "What is a Hyperlink?", "marks": 1, "answer": "A link that takes you to another slide, file, or website when clicked." },
                        { "id": 15, "question": "Name one audio format supported by PowerPoint.", "marks": 1, "answer": ".mp3 (or .wav)." },
                        { "id": 16, "question": "What is the Slide Master?", "marks": 1, "answer": "The top slide in a hierarchy that stores information about the theme and layout of the presentation." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How do you add an Action Button to a slide?", "marks": 6, "answer": "Steps:\n1. Go to Insert Tab -> Shapes.\n2. Scroll down to the 'Action Buttons' section.\n3. Select a button (e.g., Home, Next, Previous).\n4. Draw the button on the slide.\n5. The 'Action Settings' dialog box appears.\n6. Choose the action (e.g., Hyperlink to Next Slide) and click OK." },
                        { "id": 18, "question": "Explain the use of the Slide Master.", "marks": 6, "answer": "Slide Master:\n- It controls the look of the entire presentation.\n- Changes made to the Slide Master (like adding a logo, changing font, or background) are automatically applied to all slides.\n- It saves time and ensures consistency in design." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write the steps to apply a Transition effect to all slides.", "marks": 6, "answer": "Steps:\n1. Select a slide.\n2. Go to the 'Transitions' tab.\n3. Choose a transition effect from the gallery (e.g., Wipe).\n4. Set options like Sound and Duration if needed.\n5. Click on 'Apply to All' in the Timing group.\n6. The selected transition will be applied to every slide in the presentation." },
                        { "id": 20, "question": "How can you insert an Audio file and set it to play across slides?", "marks": 6, "answer": "Steps:\n1. Insert Tab -> Audio -> Audio on My PC.\n2. Select the file and click Insert.\n3. With the audio icon selected, go to the 'Playback' tab.\n4. Check the box 'Play Across Slides'.\n5. You can also check 'Loop until Stopped' to keep the music playing." }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 5: Presentation: Visual Effects - Set C",
        content: {
            "title": "Computer Practice Paper - Chapter 5: Presentation: Visual Effects - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which option allows you to print multiple slides on one page?", "options": ["Full Page Slides", "Notes Pages", "Handouts", "Outline"], "answer": "Handouts", "marks": 1 },
                        { "id": 2, "question": "The 'From Beginning' button is in which tab?", "options": ["Home", "View", "Slide Show", "Review"], "answer": "Slide Show", "marks": 1 },
                        { "id": 3, "question": "Which key is used to go to the next slide during a show?", "options": ["Spacebar", "Enter", "Right Arrow", "All of these"], "answer": "All of these", "marks": 1 },
                        { "id": 4, "question": "To go to the previous slide, press:", "options": ["Backspace", "Left Arrow", "P", "All of these"], "answer": "All of these", "marks": 1 },
                        { "id": 5, "question": "SmartArt is used to insert:", "options": ["Videos", "Graphics/Diagrams", "Audio", "Charts"], "answer": "Graphics/Diagrams", "marks": 1 },
                        { "id": 6, "question": "Which view displays only the text (titles and bullets) of the slides?", "options": ["Slide Sorter", "Outline View", "Normal", "Notes Page"], "answer": "Outline View", "marks": 1 },
                        { "id": 7, "question": "To change the background color of a slide, go to:", "options": ["Design Tab", "Home Tab", "Insert Tab", "View Tab"], "answer": "Design Tab", "marks": 1 },
                        { "id": 8, "question": "The 'Effect Options' button is available for:", "options": ["Transitions", "Animations", "Both", "None"], "answer": "Both", "marks": 1 },
                        { "id": 9, "question": "Which of these is a video file format?", "options": [".wmv", ".mp3", ".jpg", ".gif"], "answer": ".wmv", "marks": 1 },
                        { "id": 10, "question": "To end a presentation, you can right-click and select:", "options": ["Stop", "End Show", "Close", "Exit"], "answer": "End Show", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What are Handouts?", "marks": 1, "answer": "Printed copies of the presentation slides given to the audience." },
                        { "id": 12, "question": "What is the use of Speaker Notes?", "marks": 1, "answer": "Notes added to slides to help the presenter remember key points (not visible to audience)." },
                        { "id": 13, "question": "Name the tab to change slide size.", "marks": 1, "answer": "Design Tab." },
                        { "id": 14, "question": "What is a Motion Path?", "marks": 1, "answer": "An animation effect that moves an object along a specific line or curve." },
                        { "id": 15, "question": "Can you record your own voice in PowerPoint?", "marks": 1, "answer": "Yes (Record Audio)." },
                        { "id": 16, "question": "What is the shortcut to print?", "marks": 1, "answer": "Ctrl + P." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the different Print Layouts in PowerPoint.", "marks": 6, "answer": "Print Layouts:\n1. Full Page Slides: Prints one slide per page.\n2. Notes Pages: Prints slide with speaker notes.\n3. Outline: Prints only the text of the presentation.\n4. Handouts: Prints multiple slides (1, 2, 3, 4, 6, 9) per page for the audience." },
                        { "id": 18, "question": "How do you apply a Theme to your presentation?", "marks": 6, "answer": "Applying a Theme:\n1. Click on the 'Design' tab.\n2. In the 'Themes' group, you will see a gallery of themes.\n3. Hover over a theme to preview it.\n4. Click on the desired theme to apply it to all slides.\n5. You can also change 'Variants' (colors/fonts) of the theme." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the steps to create a Custom Animation path.", "marks": 6, "answer": "Steps:\n1. Select the object.\n2. Animations Tab -> Add Animation.\n3. Scroll down to 'Motion Paths'.\n4. Select 'Custom Path'.\n5. The cursor changes to a crosshair.\n6. Draw the path you want the object to follow on the slide.\n7. Double-click to finish drawing. The object will move along this path." },
                        { "id": 20, "question": "What are the benefits of using PowerPoint for presentations?", "marks": 6, "answer": "Benefits:\n1. Visual Appeal: Uses images, videos, and graphics to make content engaging.\n2. Structure: Organizes information into logical slides.\n3. Multimedia: Supports audio and video integration.\n4. Flexibility: Easy to edit and update content.\n5. Audience Engagement: Animations and transitions keep the audience interested.\n6. Handouts: Easy to provide notes to the audience." }
                    ]
                }
            ]
        }
    },
    // Chapter 6: Scratch Programming
    {
        title: "Computer Practice Paper - Chapter 6: Scratch Programming - Set A",
        content: {
            "title": "Computer Practice Paper - Chapter 6: Scratch Programming - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The main character in Scratch is called a:", "options": ["Actor", "Sprite", "Object", "Toon"], "answer": "Sprite", "marks": 1 },
                        { "id": 2, "question": "The default sprite in Scratch is a:", "options": ["Dog", "Cat", "Ball", "Monkey"], "answer": "Cat", "marks": 1 },
                        { "id": 3, "question": "The area where the sprite moves is called the:", "options": ["Screen", "Stage", "Platform", "Backdrop"], "answer": "Stage", "marks": 1 },
                        { "id": 4, "question": "Which block category is used for movement?", "options": ["Looks", "Sound", "Motion", "Control"], "answer": "Motion", "marks": 1 },
                        { "id": 5, "question": "The green flag is used to:", "options": ["Stop the script", "Start the script", "Pause the script", "Delete the script"], "answer": "Start the script", "marks": 1 },
                        { "id": 6, "question": "Which block makes the sprite say something?", "options": ["Say Hello", "Move 10 steps", "Play sound", "Wait 1 sec"], "answer": "Say Hello", "marks": 1 },
                        { "id": 7, "question": "To repeat actions, we use:", "options": ["Motion blocks", "Control blocks", "Sensing blocks", "Pen blocks"], "answer": "Control blocks", "marks": 1 },
                        { "id": 8, "question": "The 'Move 10 steps' block is in which color category?", "options": ["Blue", "Purple", "Orange", "Green"], "answer": "Blue", "marks": 1 },
                        { "id": 9, "question": "A collection of instructions is called a:", "options": ["Sprite", "Script", "Stage", "Costume"], "answer": "Script", "marks": 1 },
                        { "id": 10, "question": "Which button stops the project?", "options": ["Green Flag", "Red Stop Sign", "Blue Circle", "Yellow Star"], "answer": "Red Stop Sign", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Scratch?", "marks": 1, "answer": "A visual programming language used to create interactive stories, games, and animations." },
                        { "id": 12, "question": "Define Sprite.", "marks": 1, "answer": "A small graphic character that performs actions in a Scratch project." },
                        { "id": 13, "question": "What is the Scripts Area?", "marks": 1, "answer": "The area where we drag and snap blocks together to create a script." },
                        { "id": 14, "question": "Name the block to turn the sprite.", "marks": 1, "answer": "Turn 15 degrees (Clockwise/Anti-clockwise)." },
                        { "id": 15, "question": "What is a Costume?", "marks": 1, "answer": "Different appearances or poses of a sprite." },
                        { "id": 16, "question": "Which block is used to wait for some time?", "marks": 1, "answer": "Wait 1 seconds (Control category)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the components of the Scratch Interface.", "marks": 6, "answer": "Components:\n1. Stage: Where the action happens.\n2. Sprite List: Shows all sprites in the project.\n3. Blocks Palette: Contains different categories of blocks (Motion, Looks, etc.).\n4. Scripts Area: Where blocks are assembled.\n5. Green Flag/Stop Sign: Controls execution." },
                        { "id": 18, "question": "How do you change the background of the Stage?", "marks": 6, "answer": "Changing Backdrop:\n1. Click on the 'Stage' icon in the Sprite List.\n2. Click on the 'Choose a Backdrop' button (bottom right).\n3. Select a backdrop from the library (e.g., Blue Sky, Bedroom).\n4. The new background appears on the Stage." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the function of Motion and Looks blocks with examples.", "marks": 6, "answer": "1. Motion Blocks (Blue): Control the movement of the sprite.\n   - Example: 'Move 10 steps' moves the sprite forward.\n   - Example: 'Go to x: 0 y: 0' moves sprite to center.\n2. Looks Blocks (Purple): Control the appearance of the sprite.\n   - Example: 'Say Hello' displays a speech bubble.\n   - Example: 'Next Costume' changes the sprite's look to animate it." },
                        { "id": 20, "question": "Write a simple script to make a sprite move in a square path.", "marks": 6, "answer": "Script for Square Path:\n1. When Green Flag clicked\n2. Repeat 4\n   a. Move 100 steps\n   b. Turn right 90 degrees\n   c. Wait 1 seconds\n(This repeats the move and turn action 4 times to form a square)" }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 6: Scratch Programming - Set B",
        content: {
            "title": "Computer Practice Paper - Chapter 6: Scratch Programming - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which block is used to draw lines as the sprite moves?", "options": ["Pen Down", "Pen Up", "Stamp", "Clear"], "answer": "Pen Down", "marks": 1 },
                        { "id": 2, "question": "The 'Forever' block is found in:", "options": ["Motion", "Control", "Sensing", "Events"], "answer": "Control", "marks": 1 },
                        { "id": 3, "question": "To change the color of the pen, use:", "options": ["Set pen color to", "Change size by", "Move 10 steps", "Say Hello"], "answer": "Set pen color to", "marks": 1 },
                        { "id": 4, "question": "Which block detects if a sprite touches a color?", "options": ["Touching color?", "Ask and wait", "Key pressed?", "Mouse down?"], "answer": "Touching color?", "marks": 1 },
                        { "id": 5, "question": "Sound blocks are colored:", "options": ["Blue", "Purple", "Pink/Magenta", "Orange"], "answer": "Pink/Magenta", "marks": 1 },
                        { "id": 6, "question": "The 'When Green Flag clicked' block is an:", "options": ["Event block", "Motion block", "Control block", "Looks block"], "answer": "Event block", "marks": 1 },
                        { "id": 7, "question": "To clear all drawings from the stage, use:", "options": ["Erase all", "Delete", "Remove", "Cut"], "answer": "Erase all", "marks": 1 },
                        { "id": 8, "question": "Which block plays a sound until it finishes?", "options": ["Play sound until done", "Start sound", "Stop all sounds", "Change volume"], "answer": "Play sound until done", "marks": 1 },
                        { "id": 9, "question": "The coordinate system in Scratch has:", "options": ["X and Y axes", "A and B axes", "Only X axis", "Only Y axis"], "answer": "X and Y axes", "marks": 1 },
                        { "id": 10, "question": "To bounce off the edge of the stage, use:", "options": ["If on edge, bounce", "Turn 180", "Go back", "Stop"], "answer": "If on edge, bounce", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the use of the Pen extension?", "marks": 1, "answer": "It allows sprites to draw shapes and lines on the stage." },
                        { "id": 12, "question": "What does the 'Repeat' block do?", "marks": 1, "answer": "It runs the blocks inside it a specified number of times." },
                        { "id": 13, "question": "Name the block to change the size of the sprite.", "marks": 1, "answer": "Change size by 10 (Looks category)." },
                        { "id": 14, "question": "What are Event blocks?", "marks": 1, "answer": "Blocks that trigger the script to run (e.g., When flag clicked)." },
                        { "id": 15, "question": "How do you add a sound?", "marks": 1, "answer": "Sounds Tab -> Choose a Sound." },
                        { "id": 16, "question": "What is the center coordinate of the stage?", "marks": 1, "answer": "X: 0, Y: 0." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the difference between 'Forever' and 'Repeat' blocks.", "marks": 6, "answer": "Forever vs Repeat:\n1. Repeat (10): Runs the blocks inside it exactly the number of times specified (e.g., 10 times) and then stops.\n2. Forever: Runs the blocks inside it endlessly (in a loop) until the Stop button is clicked. Used for continuous actions like game loops." },
                        { "id": 18, "question": "How can you make a sprite glide to a random position?", "marks": 6, "answer": "Using the Glide block:\n1. Select the Motion category.\n2. Drag the 'Glide 1 secs to random position' block.\n3. When executed, the sprite will smoothly move to a random spot on the stage over 1 second." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write a script to draw a Triangle using Pen blocks.", "marks": 6, "answer": "Script for Triangle:\n1. When Green Flag clicked\n2. Erase all\n3. Pen down\n4. Repeat 3\n   a. Move 100 steps\n   b. Turn right 120 degrees\n   c. Wait 1 seconds\n5. Pen up" },
                        { "id": 20, "question": "Describe the Sound blocks and how to record a sound.", "marks": 6, "answer": "Sound Blocks:\n- Used to play music or effects.\n- 'Play sound [Meow] until done': Plays full sound before moving to next block.\n- 'Start sound [Meow]': Plays sound and immediately moves to next block.\n\nRecording Sound:\n1. Go to Sounds Tab.\n2. Click 'Choose a Sound' -> 'Record'.\n3. Click the Record button (Red circle), speak, and stop.\n4. Save the recording and use it in blocks." }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 6: Scratch Programming - Set C",
        content: {
            "title": "Computer Practice Paper - Chapter 6: Scratch Programming - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which block is used to ask a question?", "options": ["Ask [What's your name?] and wait", "Say Hello", "Think Hmm", "Broadcast"], "answer": "Ask [What's your name?] and wait", "marks": 1 },
                        { "id": 2, "question": "The answer to an 'Ask' block is stored in:", "options": ["Variable", "Answer block", "List", "Sprite"], "answer": "Answer block", "marks": 1 },
                        { "id": 3, "question": "Which block is used for decision making?", "options": ["If...then", "Repeat", "Forever", "Wait"], "answer": "If...then", "marks": 1 },
                        { "id": 4, "question": "Sensing blocks are colored:", "options": ["Light Blue (Cyan)", "Dark Blue", "Green", "Orange"], "answer": "Light Blue (Cyan)", "marks": 1 },
                        { "id": 5, "question": "Operators blocks (Green) are used for:", "options": ["Math and Logic", "Movement", "Sound", "Events"], "answer": "Math and Logic", "marks": 1 },
                        { "id": 6, "question": "To check if two values are equal, use:", "options": ["= block", "+ block", "> block", "And block"], "answer": "= block", "marks": 1 },
                        { "id": 7, "question": "Variables are created in which category?", "options": ["Variables", "Events", "Control", "My Blocks"], "answer": "Variables", "marks": 1 },
                        { "id": 8, "question": "Which block joins two strings of text?", "options": ["Join [apple] [banana]", "Add", "Link", "Combine"], "answer": "Join [apple] [banana]", "marks": 1 },
                        { "id": 9, "question": "To generate a random number, use:", "options": ["Pick random 1 to 10", "Randomize", "Shuffle", "Guess"], "answer": "Pick random 1 to 10", "marks": 1 },
                        { "id": 10, "question": "The 'If...then...else' block has how many branches?", "options": ["One", "Two", "Three", "Four"], "answer": "Two", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a Variable?", "marks": 1, "answer": "A placeholder to store data (values) that can change during the program." },
                        { "id": 12, "question": "What is the use of Sensing blocks?", "marks": 1, "answer": "To detect things like touching colors, mouse clicks, or keyboard presses." },
                        { "id": 13, "question": "Name a Comparison Operator.", "marks": 1, "answer": "> (Greater than), < (Less than), or = (Equal)." },
                        { "id": 14, "question": "What does the 'Key [space] pressed?' block do?", "marks": 1, "answer": "It checks if the spacebar is being pressed (True/False)." },
                        { "id": 15, "question": "How do you create a new variable?", "marks": 1, "answer": "Variables Category -> Make a Variable." },
                        { "id": 16, "question": "What is a Condition?", "marks": 1, "answer": "A statement that is either True or False (used in If blocks)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the working of the 'If...then...else' block.", "marks": 6, "answer": "If...then...else:\n- It checks a condition.\n- If the condition is True, it runs the blocks inside the 'If' part.\n- If the condition is False, it runs the blocks inside the 'Else' part.\n- Example: If (Score > 10) then Say 'You Win' Else Say 'Try Again'." },
                        { "id": 18, "question": "How can you make a sprite follow the mouse pointer?", "marks": 6, "answer": "Script:\n1. When Green Flag clicked\n2. Forever\n   a. Go to [mouse-pointer]\n(This makes the sprite continuously update its position to match the mouse cursor)" }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write a script to ask the user's name and greet them.", "marks": 6, "answer": "Script:\n1. When Green Flag clicked\n2. Ask [What is your name?] and wait\n3. Say (Join [Hello ] (Answer)) for 2 seconds\n(This combines the word 'Hello ' with the name typed by the user)" },
                        { "id": 20, "question": "Create a simple logic to check if a number is positive or negative.", "marks": 6, "answer": "Script:\n1. Ask [Enter a number] and wait\n2. If (Answer > 0) then\n   - Say [Positive]\n3. Else\n   - If (Answer < 0) then\n     - Say [Negative]\n   - Else\n     - Say [Zero]" }
                    ]
                }
            ]
        }
    },
    // Chapter 7: HTML: An Introduction
    {
        title: "Computer Practice Paper - Chapter 7: HTML: An Introduction - Set A",
        content: {
            "title": "Computer Practice Paper - Chapter 7: HTML: An Introduction - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "HTML stands for:", "options": ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Text Make Language", "Hyper Tool Markup Language"], "answer": "Hyper Text Markup Language", "marks": 1 },
                        { "id": 2, "question": "HTML tags are enclosed in:", "options": ["Curly braces {}", "Square brackets []", "Angle brackets <>", "Parentheses ()"], "answer": "Angle brackets <>", "marks": 1 },
                        { "id": 3, "question": "Which tag is the root tag of an HTML document?", "options": ["<HEAD>", "<TITLE>", "<HTML>", "<BODY>"], "answer": "<HTML>", "marks": 1 },
                        { "id": 4, "question": "The tag used to create a new paragraph is:", "options": ["<N>", "<BR>", "<P>", "<PARA>"], "answer": "<P>", "marks": 1 },
                        { "id": 5, "question": "Which tag makes text bold?", "options": ["<B>", "<BOLD>", "<STRONG>", "<BL>"], "answer": "<B>", "marks": 1 },
                        { "id": 6, "question": "The <TITLE> tag is placed inside the:", "options": ["<BODY>", "<HEAD>", "<HTML>", "<FOOTER>"], "answer": "<HEAD>", "marks": 1 },
                        { "id": 7, "question": "Which tag is used for a line break?", "options": ["<LB>", "<BR>", "<BREAK>", "<L>"], "answer": "<BR>", "marks": 1 },
                        { "id": 8, "question": "Container tags have:", "options": ["Only opening tag", "Only closing tag", "Both opening and closing tags", "None"], "answer": "Both opening and closing tags", "marks": 1 },
                        { "id": 9, "question": "Which tag creates a horizontal line?", "options": ["<HL>", "<HR>", "<LINE>", "<L>"], "answer": "<HR>", "marks": 1 },
                        { "id": 10, "question": "HTML files are saved with extension:", "options": [".ht", ".hml", ".html", ".txt"], "answer": ".html", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a Web Browser?", "marks": 1, "answer": "Software used to view web pages (e.g., Chrome, Edge)." },
                        { "id": 12, "question": "What is an Empty Tag?", "marks": 1, "answer": "A tag that does not require a closing tag (e.g., <BR>, <HR>)." },
                        { "id": 13, "question": "Which tag is used to underline text?", "marks": 1, "answer": "<U>." },
                        { "id": 14, "question": "What is the use of the <BODY> tag?", "marks": 1, "answer": "It contains the main content of the web page visible to the user." },
                        { "id": 15, "question": "Name any text editor to write HTML.", "marks": 1, "answer": "Notepad (or VS Code/Sublime Text)." },
                        { "id": 16, "question": "How do you close the <HTML> tag?", "marks": 1, "answer": "</HTML>." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the structure of an HTML document.", "marks": 6, "answer": "Structure:\n<HTML>\n  <HEAD>\n    <TITLE> Page Title </TITLE>\n  </HEAD>\n  <BODY>\n    Content of the page goes here...\n  </BODY>\n</HTML>\n- <HTML>: Starts the document.\n- <HEAD>: Contains info about the page.\n- <BODY>: Contains visible content." },
                        { "id": 18, "question": "Differentiate between Container and Empty tags.", "marks": 6, "answer": "1. Container Tags: Have both opening (< >) and closing (</ >) tags. They contain text or other tags. Ex: <B>Text</B>, <P>Text</P>.\n2. Empty Tags: Have only an opening tag. They do not enclose text. Ex: <BR> (Break), <HR> (Horizontal Rule)." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write an HTML code to display a webpage with a title 'My First Page' and a bold paragraph saying 'Hello World'.", "marks": 6, "answer": "Code:\n<HTML>\n<HEAD>\n<TITLE>My First Page</TITLE>\n</HEAD>\n<BODY>\n<P><B>Hello World</B></P>\n</BODY>\n</HTML>" },
                        { "id": 20, "question": "Explain the Heading tags in HTML.", "marks": 6, "answer": "Heading Tags:\n- Used to define headings of different sizes.\n- There are 6 levels: <H1> to <H6>.\n- <H1> is the largest and most important heading.\n- <H6> is the smallest heading.\n- Example: <H1>Main Heading</H1>" }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 7: HTML: An Introduction - Set B",
        content: {
            "title": "Computer Practice Paper - Chapter 7: HTML: An Introduction - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which tag is used to create an ordered list?", "options": ["<UL>", "<OL>", "<LI>", "<DL>"], "answer": "<OL>", "marks": 1 },
                        { "id": 2, "question": "Which tag is used to create an unordered list (bullets)?", "options": ["<UL>", "<OL>", "<BL>", "<LIST>"], "answer": "<UL>", "marks": 1 },
                        { "id": 3, "question": "The attribute used to change the background color of the page is:", "options": ["COLOR", "BGCOLOR", "BACKCOLOR", "BACKGROUND"], "answer": "BGCOLOR", "marks": 1 },
                        { "id": 4, "question": "Which tag is used to insert an image?", "options": ["<IMG>", "<IMAGE>", "<PIC>", "<SRC>"], "answer": "<IMG>", "marks": 1 },
                        { "id": 5, "question": "The attribute 'SRC' stands for:", "options": ["Screen", "Source", "Search", "Script"], "answer": "Source", "marks": 1 },
                        { "id": 6, "question": "To define a list item, we use:", "options": ["<L>", "<LI>", "<LIST>", "<ITEM>"], "answer": "<LI>", "marks": 1 },
                        { "id": 7, "question": "Which attribute aligns text to the center?", "options": ["ALIGN='CENTER'", "CENTER='YES'", "MIDDLE", "JUSTIFY"], "answer": "ALIGN='CENTER'", "marks": 1 },
                        { "id": 8, "question": "The default bullet style for <UL> is:", "options": ["Circle", "Square", "Disc", "None"], "answer": "Disc", "marks": 1 },
                        { "id": 9, "question": "Which tag makes text italic?", "options": ["<I>", "<ITALIC>", "<SLANT>", "<EM>"], "answer": "<I>", "marks": 1 },
                        { "id": 10, "question": "Attributes are written inside the:", "options": ["Closing tag", "Opening tag", "Body tag", "Head tag"], "answer": "Opening tag", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is an Attribute?", "marks": 1, "answer": "A property that provides additional information about a tag (e.g., BGCOLOR)." },
                        { "id": 12, "question": "Write the syntax to insert an image.", "marks": 1, "answer": "<IMG SRC='filename.jpg'>" },
                        { "id": 13, "question": "What is the use of the TYPE attribute in lists?", "marks": 1, "answer": "To change the style of bullets (disc, circle, square) or numbers (1, A, a, I)." },
                        { "id": 14, "question": "Name the attribute to set text color.", "marks": 1, "answer": "TEXT (in BODY tag) or COLOR (in FONT tag)." },
                        { "id": 15, "question": "What is a nested list?", "marks": 1, "answer": "A list inside another list." },
                        { "id": 16, "question": "Which tag centers content?", "marks": 1, "answer": "<CENTER>." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Ordered and Unordered Lists.", "marks": 6, "answer": "1. Ordered List (<OL>): Items are numbered (1, 2, 3 or A, B, C). Used when sequence matters. Default is 1, 2, 3.\n2. Unordered List (<UL>): Items are marked with bullets. Used when sequence does not matter. Default is Disc." },
                        { "id": 18, "question": "Explain the attributes of the <BODY> tag.", "marks": 6, "answer": "Attributes of <BODY>:\n1. BGCOLOR: Sets the background color of the page. (e.g., <BODY BGCOLOR='Yellow'>)\n2. TEXT: Sets the color of all text on the page. (e.g., <BODY TEXT='Red'>)\n3. BACKGROUND: Sets an image as the background. (e.g., <BODY BACKGROUND='image.jpg'>)" }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write HTML code to create a numbered list of 3 fruits.", "marks": 6, "answer": "Code:\n<HTML>\n<BODY>\n<H2>List of Fruits</H2>\n<OL>\n  <LI>Apple</LI>\n  <LI>Banana</LI>\n  <LI>Mango</LI>\n</OL>\n</BODY>\n</HTML>" },
                        { "id": 20, "question": "Explain the <IMG> tag and its attributes.", "marks": 6, "answer": "<IMG> Tag:\n- Used to display images.\n- It is an empty tag.\nAttributes:\n1. SRC: Specifies the path/filename of the image (Required).\n2. HEIGHT: Sets height of image.\n3. WIDTH: Sets width of image.\n4. ALT: Alternate text if image fails to load.\n5. BORDER: Adds a border around the image." }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 7: HTML: An Introduction - Set C",
        content: {
            "title": "Computer Practice Paper - Chapter 7: HTML: An Introduction - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which tag is used to create a table?", "options": ["<TABLE>", "<TAB>", "<TB>", "<GRID>"], "answer": "<TABLE>", "marks": 1 },
                        { "id": 2, "question": "Which tag defines a table row?", "options": ["<TR>", "<TD>", "<TH>", "<ROW>"], "answer": "<TR>", "marks": 1 },
                        { "id": 3, "question": "Which tag defines table data (cell)?", "options": ["<TD>", "<TR>", "<TH>", "<DATA>"], "answer": "<TD>", "marks": 1 },
                        { "id": 4, "question": "Which tag defines a table header?", "options": ["<TH>", "<HEAD>", "<H>", "<TD>"], "answer": "<TH>", "marks": 1 },
                        { "id": 5, "question": "To create a hyperlink, we use the tag:", "options": ["<LINK>", "<A>", "<HREF>", "<HYPER>"], "answer": "<A>", "marks": 1 },
                        { "id": 6, "question": "The attribute 'HREF' stands for:", "options": ["Hyper Text Reference", "Hyper Link", "Home Reference", "High Reference"], "answer": "Hyper Text Reference", "marks": 1 },
                        { "id": 7, "question": "Which tag changes font style, size, and color?", "options": ["<TEXT>", "<FONT>", "<STYLE>", "<FORMAT>"], "answer": "<FONT>", "marks": 1 },
                        { "id": 8, "question": "The attribute to merge columns in a table is:", "options": ["ROWSPAN", "COLSPAN", "MERGE", "SPAN"], "answer": "COLSPAN", "marks": 1 },
                        { "id": 9, "question": "The attribute to merge rows in a table is:", "options": ["ROWSPAN", "COLSPAN", "MERGE", "SPAN"], "answer": "ROWSPAN", "marks": 1 },
                        { "id": 10, "question": "Which tag creates a scrolling text (marquee)?", "options": ["<SCROLL>", "<MARQUEE>", "<MOVE>", "<RUN>"], "answer": "<MARQUEE>", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the Anchor tag <A> used for?", "marks": 1, "answer": "To create hyperlinks connecting web pages." },
                        { "id": 12, "question": "What is the use of the BORDER attribute in <TABLE>?", "marks": 1, "answer": "To specify the thickness of the table border." },
                        { "id": 13, "question": "Name the attribute to change font size.", "marks": 1, "answer": "SIZE (in <FONT> tag)." },
                        { "id": 14, "question": "What is Cell Padding?", "marks": 1, "answer": "Space between the cell border and the content inside it." },
                        { "id": 15, "question": "What is Cell Spacing?", "marks": 1, "answer": "Space between two adjacent cells." },
                        { "id": 16, "question": "Write the syntax for a link.", "marks": 1, "answer": "<A HREF='url'>Link Text</A>" }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the attributes of the <FONT> tag.", "marks": 6, "answer": "Attributes of <FONT>:\n1. FACE: Sets the font type (e.g., FACE='Arial').\n2. SIZE: Sets the size of text (1 to 7). (e.g., SIZE='4').\n3. COLOR: Sets the color of text. (e.g., COLOR='Blue').\nExample: <FONT FACE='Verdana' SIZE='5' COLOR='Red'>Text</FONT>" },
                        { "id": 18, "question": "What is a Hyperlink? How is it useful?", "marks": 6, "answer": "Hyperlink:\n- It is a link (text or image) that connects one web page to another or to a different section of the same page.\n- When clicked, it navigates the user to the destination.\n- Useful for navigation menus and connecting related information." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write HTML code to create a simple table with 2 rows and 2 columns.", "marks": 6, "answer": "Code:\n<TABLE BORDER='1'>\n  <TR>\n    <TH>Name</TH>\n    <TH>Marks</TH>\n  </TR>\n  <TR>\n    <TD>John</TD>\n    <TD>90</TD>\n  </TR>\n</TABLE>" },
                        { "id": 20, "question": "Explain the difference between <TH> and <TD>.", "marks": 6, "answer": "1. <TH> (Table Header):\n   - Used for headings in the table.\n   - Text is Bold and Centered by default.\n   - Usually used in the first row.\n2. <TD> (Table Data):\n   - Used for regular data cells.\n   - Text is Normal and Left-aligned by default.\n   - Used in subsequent rows." }
                    ]
                }
            ]
        }
    },
    // Chapter 9: QBASIC
    {
        title: "Computer Practice Paper - Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and - Set A",
        content: {
            "title": "Computer Practice Paper - Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "QBASIC stands for:", "options": ["Quick Beginner's All-purpose Symbolic Instruction Code", "Quick Basic All System Code", "Quiet Basic Code", "None"], "answer": "Quick Beginner's All-purpose Symbolic Instruction Code", "marks": 1 },
                        { "id": 2, "question": "Which command is used to clear the screen?", "options": ["CLEAR", "CLS", "CLC", "CLEAN"], "answer": "CLS", "marks": 1 },
                        { "id": 3, "question": "Which command is used to display output?", "options": ["SHOW", "DISPLAY", "PRINT", "WRITE"], "answer": "PRINT", "marks": 1 },
                        { "id": 4, "question": "Which command ends the program?", "options": ["STOP", "FINISH", "END", "EXIT"], "answer": "END", "marks": 1 },
                        { "id": 5, "question": "A value that does not change during execution is called:", "options": ["Variable", "Constant", "String", "Operator"], "answer": "Constant", "marks": 1 },
                        { "id": 6, "question": "String constants are enclosed in:", "options": ["Single quotes", "Double quotes", "Brackets", "None"], "answer": "Double quotes", "marks": 1 },
                        { "id": 7, "question": "Which symbol is used for String variables?", "options": ["$", "#", "%", "&"], "answer": "$", "marks": 1 },
                        { "id": 8, "question": "The extension of a QBASIC file is:", "options": [".qb", ".bas", ".qbasic", ".txt"], "answer": ".bas", "marks": 1 },
                        { "id": 9, "question": "REM command is used for:", "options": ["Removing files", "Remarks/Comments", "Remainder", "Remember"], "answer": "Remarks/Comments", "marks": 1 },
                        { "id": 10, "question": "Which key runs the program?", "options": ["F2", "F5", "F1", "Enter"], "answer": "F5", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a Program?", "marks": 1, "answer": "A set of instructions given to a computer to perform a specific task." },
                        { "id": 12, "question": "What is a Character Set?", "marks": 1, "answer": "The set of symbols (alphabets, numbers, special characters) allowed in a language." },
                        { "id": 13, "question": "Define Variable.", "marks": 1, "answer": "A named memory location whose value can change during program execution." },
                        { "id": 14, "question": "What does CLS stand for?", "marks": 1, "answer": "Clear Screen." },
                        { "id": 15, "question": "Write a command to print your name.", "marks": 1, "answer": "PRINT \"My Name\"" },
                        { "id": 16, "question": "What is a Numeric Constant?", "marks": 1, "answer": "A number (integer or decimal) used in a program (e.g., 10, 3.14)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Numeric and String Variables.", "marks": 6, "answer": "1. Numeric Variable: Stores numbers. Name ends with a letter or %. Example: A = 10, Sum = 50.\n2. String Variable: Stores text (alphanumeric). Name must end with $. Example: Name$ = \"John\"." },
                        { "id": 18, "question": "Explain the use of PRINT with comma (,) and semicolon (;).", "marks": 6, "answer": "1. Semicolon (;): Prints items continuously without spaces (or very little space). Example: PRINT \"A\"; \"B\" -> AB.\n2. Comma (,): Prints items with a large gap (tab space/zones). Example: PRINT \"A\", \"B\" -> A        B." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write a QBASIC program to find the sum of two numbers.", "marks": 6, "answer": "Program:\nCLS\nLET A = 10\nLET B = 20\nLET SUM = A + B\nPRINT \"The Sum is \"; SUM\nEND" },
                        { "id": 20, "question": "What are the rules for naming a variable?", "marks": 6, "answer": "Rules:\n1. Must start with a letter.\n2. Can contain letters, numbers, and dot.\n3. Cannot contain spaces or special characters (except type declaration like $).\n4. Cannot be a reserved keyword (like PRINT, END).\n5. Should be meaningful." }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and - Set B",
        content: {
            "title": "Computer Practice Paper - Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which command is used to take input from the user?", "options": ["GET", "TAKE", "INPUT", "READ"], "answer": "INPUT", "marks": 1 },
                        { "id": 2, "question": "Which command assigns a value to a variable?", "options": ["SET", "LET", "PUT", "ASSIGN"], "answer": "LET", "marks": 1 },
                        { "id": 3, "question": "The operator for multiplication is:", "options": ["x", "*", "#", "."], "answer": "*", "marks": 1 },
                        { "id": 4, "question": "The operator for division is:", "options": ["/", "\\", "div", "%"], "answer": "/", "marks": 1 },
                        { "id": 5, "question": "Which of these is a valid variable name?", "options": ["1Name", "Name$", "Name space", "Print"], "answer": "Name$", "marks": 1 },
                        { "id": 6, "question": "To find the remainder, we use:", "options": ["MOD", "REM", "%", "/"], "answer": "MOD", "marks": 1 },
                        { "id": 7, "question": "Hierarchy of operations follows:", "options": ["BODMAS", "BEDMAS", "PEMDAS", "Left to Right"], "answer": "BODMAS", "marks": 1 },
                        { "id": 8, "question": "Which operator is used for power/exponent?", "options": ["^", "**", "exp", "pow"], "answer": "^", "marks": 1 },
                        { "id": 9, "question": "INPUT \"Enter Name\", N$ - What is wrong?", "options": ["Comma should be semicolon", "Quotes missing", "N$ is wrong", "Nothing"], "answer": "Comma should be semicolon", "marks": 1 },
                        { "id": 10, "question": "LET A = \"Hello\" is valid if A is:", "options": ["Numeric", "String (A$)", "Constant", "None"], "answer": "String (A$)", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the syntax of INPUT command?", "marks": 1, "answer": "INPUT \"Message\"; Variable" },
                        { "id": 12, "question": "What does LET command do?", "marks": 1, "answer": "It assigns a value or result of an expression to a variable." },
                        { "id": 13, "question": "Write the operator for subtraction.", "marks": 1, "answer": "-" },
                        { "id": 14, "question": "What is an Operator?", "marks": 1, "answer": "A symbol that performs an operation on data (e.g., +, -, *)." },
                        { "id": 15, "question": "Evaluate: 10 + 5 * 2", "marks": 1, "answer": "20 (Multiplication first: 5*2=10, then 10+10=20)." },
                        { "id": 16, "question": "Can we use INPUT without a message?", "marks": 1, "answer": "Yes (INPUT A)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the difference between INPUT and LET.", "marks": 6, "answer": "1. LET: Used to assign a fixed value or calculation to a variable inside the program. The user cannot change it during execution. Ex: LET A = 10.\n2. INPUT: Used to take value from the user during program execution. Makes the program interactive. Ex: INPUT \"Enter A\"; A." },
                        { "id": 18, "question": "List the Arithmetic Operators in QBASIC.", "marks": 6, "answer": "Operators:\n1. + (Addition)\n2. - (Subtraction)\n3. * (Multiplication)\n4. / (Division)\n5. ^ (Exponentiation)\n6. MOD (Modulus/Remainder)" }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write a program to calculate the Area of a Rectangle (Area = L * B). Take L and B from user.", "marks": 6, "answer": "Program:\nCLS\nINPUT \"Enter Length: \"; L\nINPUT \"Enter Breadth: \"; B\nLET AREA = L * B\nPRINT \"The Area is \"; AREA\nEND" },
                        { "id": 20, "question": "Write a program to accept name and age and print them.", "marks": 6, "answer": "Program:\nCLS\nINPUT \"Enter your Name: \"; N$\nINPUT \"Enter your Age: \"; A\nPRINT \"Hello \"; N$\nPRINT \"You are \"; A; \" years old.\"\nEND" }
                    ]
                }
            ]
        }
    },
    {
        title: "Computer Practice Paper - Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and - Set C",
        content: {
            "title": "Computer Practice Paper - Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "COMPUTER",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which statement is used for decision making?", "options": ["IF...THEN", "FOR...NEXT", "GOTO", "PRINT"], "answer": "IF...THEN", "marks": 1 },
                        { "id": 2, "question": "Which statement is used for looping?", "options": ["IF...THEN", "FOR...NEXT", "LET", "END"], "answer": "FOR...NEXT", "marks": 1 },
                        { "id": 3, "question": "Relational operators return:", "options": ["Number", "String", "True or False", "None"], "answer": "True or False", "marks": 1 },
                        { "id": 4, "question": "The symbol for 'Not Equal To' is:", "options": ["!=", "<>", "><", "=="], "answer": "<>", "marks": 1 },
                        { "id": 5, "question": "GOTO is a:", "options": ["Looping statement", "Conditional statement", "Jumping statement", "Input statement"], "answer": "Jumping statement", "marks": 1 },
                        { "id": 6, "question": "In FOR I = 1 TO 10, how many times will the loop run?", "options": ["1", "9", "10", "11"], "answer": "10", "marks": 1 },
                        { "id": 7, "question": "STEP keyword is used in:", "options": ["IF", "FOR", "PRINT", "INPUT"], "answer": "FOR", "marks": 1 },
                        { "id": 8, "question": "Which symbol is 'Greater than or Equal to'?", "options": [">=", "=>", ">", "="], "answer": ">=", "marks": 1 },
                        { "id": 9, "question": "To print numbers 1 to 5, we use:", "options": ["IF", "FOR", "LET", "INPUT"], "answer": "FOR", "marks": 1 },
                        { "id": 10, "question": "Every IF block must end with (in multiline):", "options": ["END", "END IF", "STOP", "FINISH"], "answer": "END IF", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What are Relational Operators?", "marks": 1, "answer": "Operators used to compare two values (e.g., <, >, =)." },
                        { "id": 12, "question": "Syntax of IF...THEN.", "marks": 1, "answer": "IF condition THEN statement" },
                        { "id": 13, "question": "What is a Loop?", "marks": 1, "answer": "Repeating a set of instructions multiple times." },
                        { "id": 14, "question": "What does STEP 2 mean in a loop?", "marks": 1, "answer": "Increase the counter variable by 2 in each iteration." },
                        { "id": 15, "question": "Write the operator for 'Less than'.", "marks": 1, "answer": "<" },
                        { "id": 16, "question": "What is an Algorithm?", "marks": 1, "answer": "Step-by-step procedure to solve a problem." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the FOR...NEXT loop with syntax.", "marks": 6, "answer": "FOR...NEXT Loop:\n- Used to repeat a block of code a fixed number of times.\nSyntax:\nFOR variable = start TO end [STEP value]\n  Statements\nNEXT variable\nExample: FOR I = 1 TO 5 \n PRINT I \n NEXT I" },
                        { "id": 18, "question": "What is a Flowchart? Name two symbols.", "marks": 6, "answer": "Flowchart:\n- A pictorial representation of an algorithm.\nSymbols:\n1. Oval (Start/Stop)\n2. Parallelogram (Input/Output)\n3. Rectangle (Process)\n4. Diamond (Decision)" }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Write a program to check if a number is Positive or Negative.", "marks": 6, "answer": "Program:\nCLS\nINPUT \"Enter a number: \"; N\nIF N > 0 THEN PRINT \"Positive\"\nIF N < 0 THEN PRINT \"Negative\"\nIF N = 0 THEN PRINT \"Zero\"\nEND" },
                        { "id": 20, "question": "Write a program to print the first 10 natural numbers using FOR loop.", "marks": 6, "answer": "Program:\nCLS\nPRINT \"First 10 Natural Numbers:\"\nFOR I = 1 TO 10\n  PRINT I\nNEXT I\nEND" }
                    ]
                }
            ]
        }
    }
];

async function regeneratePapers() {
    const db = await initDatabase();
    
    for (const paperData of papersToRegenerate) {
        const title = paperData.title;
        console.log(`Processing: ${title}`);
        
        // Check if paper exists
        const paper = await db.get('SELECT * FROM question_papers WHERE title = ?', title);
        
        if (!paper) {
            console.error(`Paper with title "${title}" not found! Skipping...`);
            continue;
        }

        console.log(`Found paper ID: ${paper.id}. Updating content...`);

        await db.run(
            'UPDATE question_papers SET content = ? WHERE id = ?',
            JSON.stringify(paperData.content),
            paper.id
        );

        console.log(`Paper "${title}" updated successfully!`);
        console.log('---');
    }
}

regeneratePapers().catch(console.error);
