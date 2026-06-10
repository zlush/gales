$urls = @{
    "Dra-Gloria-Fernandez.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dra-Gloria-Fernandez.jpg"
    "Dr-Oscar-Oviedo.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dr-Oscar-Oviedo.jpg"
    "Dr-Rodrigo-Iturriaga.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dr-Rodrigo-Iturriaga.jpg"
    "Dra-Carolina-Oviedo.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dra-Carolina-Oviedo.jpg"
    "Dra-Maria-Soledad-Fortuno.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dra-Maria-Soledad-Fortuno.jpg"
    "Dr-Branko-Radovic.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dr-Branko-Radovic.jpg"
    "Dra-Alejandra-Gonzalez.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dra-Alejandra-Gonzalez.jpg"
    "Dr-Marcelo-Silva.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dr-Marcelo-Silva.jpg"
    "Dr-Pablo-Santibanez.jpg" = "https://odontologiadegales.cl/wp-content/uploads/2023/05/Dr-Pablo-Santibanez.jpg"
}

$outputDir = "c:\Users\alfre\OneDrive\Escritorio\ANTIGRAVITY PROJECTS\Gales\assets\equipo"
if (-not (Test-Path $outputDir)) { New-Item -ItemType Directory -Path $outputDir }

foreach ($key in $urls.Keys) {
    $url = $urls[$key]
    $outPath = Join-Path $outputDir $key
    Write-Host "Downloading $url to $outPath"
    $cmd = "curl.exe -s -e `"https://odontologiadegales.cl/`" -A `"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36`" -o `"$outPath`" `"$url`""
    Invoke-Expression $cmd
}
