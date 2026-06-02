Add-Type -AssemblyName System.Drawing

function Optimize-Image {
    param (
        [string]$Path,
        [int]$MaxWidth = 600
    )
    
    Write-Host "Optimizing $Path..."
    $img = [System.Drawing.Image]::FromFile($Path)
    
    $width = $img.Width
    $height = $img.Height
    
    if ($width -gt $MaxWidth) {
        $ratio = $MaxWidth / $width
        $newWidth = $MaxWidth
        $newHeight = [math]::Round($height * $ratio)
    } else {
        $newWidth = $width
        $newHeight = $height
    }
    
    $bmp = New-Object System.Drawing.Bitmap([int]$newWidth, [int]$newHeight)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Fill background with white just in case it's a transparent PNG
    $g.Clear([System.Drawing.Color]::White)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, [int]$newWidth, [int]$newHeight)
    $g.Dispose()
    
    # Save as JPEG
    $newPath = $Path -replace "\.png$", ".jpg"
    
    $bmp.Save($newPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    $img.Dispose()
    
    if ($newPath -ne $Path) {
        Remove-Item $Path -Force
        Write-Host "Saved as $newPath and deleted original."
    }
}

$files = Get-ChildItem "assets\equipo\*.png"
foreach ($f in $files) {
    if ($f.Name -match "Constanza|Valentina") {
        Optimize-Image $f.FullName 600
    }
}
