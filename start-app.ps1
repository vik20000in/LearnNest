$backendPort = 3000
$frontendPort = 5173

function Test-PortInUse {
    param ($Port)
    $conns = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    return $null -ne $conns
}

Write-Host "Checking LearnNest services..."

# Start Backend
if (Test-PortInUse -Port $backendPort) {
    Write-Host "Backend is already running on port $backendPort." -ForegroundColor Yellow
} else {
    Write-Host "Starting Backend on port $backendPort..." -ForegroundColor Green
    # Start in a new window
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm run dev"
}

# Start Frontend
if (Test-PortInUse -Port $frontendPort) {
    Write-Host "Frontend is already running on port $frontendPort." -ForegroundColor Yellow
} else {
    Write-Host "Starting Frontend on port $frontendPort..." -ForegroundColor Green
    # Start in a new window
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"
}

Write-Host "Done."
