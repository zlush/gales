$files = Get-ChildItem "c:\Users\alfre\OneDrive\Escritorio\ANTIGRAVITY PROJECTS\Gales\*.html"
$newUrl = "https://d2f3c803a9398eba5e2dc13bef506157a404a69f.agenda.softwaredentalink.com/agenda?modalidad=1"

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # We use ReadAllText and WriteAllText to preserve UTF-8 encoding properly without BOM issues if any
    $newContent = [regex]::Replace($content, 'href="https://wa\.me/56992387980"([^>]*>\s*(?i)(?:Agendar|Solicitar))', "href=`"$newUrl`"`$1")
    
    if ($content -ne $newContent) {
        Write-Host "Updated $($file.Name)"
        # Using utf8 without BOM
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)
    }
}
