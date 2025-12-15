$ports = @(3000, 5173)

Write-Host "Stopping LearnNest services..."

foreach ($port in $ports) {
    $connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if ($connections) {
        $pidsToStop = $connections | Select-Object -ExpandProperty OwningProcess -Unique
        foreach ($id in $pidsToStop) {
            try {
                $proc = Get-Process -Id $id -ErrorAction Stop
                Write-Host "Stopping process '$($proc.ProcessName)' on port $port (PID: $id)..."
                Stop-Process -Id $id -Force -ErrorAction Stop
                Write-Host "Successfully stopped." -ForegroundColor Green
            } catch {
                Write-Host "Failed to stop process with PID $id on port $port. It might have already terminated." -ForegroundColor Yellow
            }
        }
    } else {
        Write-Host "No process found listening on port $port." -ForegroundColor Gray
    }
}

Write-Host "Done."
