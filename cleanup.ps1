$backupDir = "_backup"
$itemsToMove = @(
    "client",
    "src",
    "index.html",
    "vite.config.ts",
    "tsconfig.json",
    "tsconfig.node.json",
    "postcss.config.js",
    "tailwind.config.js",
    "package.json",
    "package-lock.json",
    "node_modules"
)

if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "Created backup directory: $backupDir"
}

foreach ($item in $itemsToMove) {
    if (Test-Path $item) {
        Write-Host "Moving $item to $backupDir..."
        Move-Item -Path $item -Destination $backupDir -Force
    } else {
        Write-Host "$item not found, skipping."
    }
}

Write-Host "Cleanup complete. Unneeded files moved to $backupDir."
