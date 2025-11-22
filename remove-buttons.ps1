$services = @(
    "car-cement-tar-removal-dubai",
    "car-ceramic-paint-protection-dubai",
    "car-headliner-roof-cloth-repair-dubai",
    "car-interior-cleaning-dubai",
    "car-leather-seat-cleaning-dubai",
    "car-leather-seat-repair-dubai",
    "car-paint-protection-film-ppf-dubai",
    "car-paint-scratch-repair-dubai",
    "car-polishing-detailing-valet-dubai",
    "car-smell-removal-odour-treatment-dubai",
    "vomit-pet-mess-clean-up-dubai"
)

foreach ($service in $services) {
    $filePath = "c:\Users\thiva\Desktop\crystalupdate\src\app\(site)\services\$service\page.tsx"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Remove the NavigationLink import if no longer needed
        $content = $content -replace 'import NavigationLink from "@/app/components/shared/navigation-link";\r?\n', ''
        
        # Remove the button section (with optional whitespace variations)
        $content = $content -replace '\r?\n\s*<div className="flex justify-center pt-8">\s*\r?\n\s*<NavigationLink\s*\r?\n\s*navigationTitle="Book This Service"\s*\r?\n\s*navigationLink="/booking"\s*\r?\n\s*transform=\{true\}\s*\r?\n\s*/>\s*\r?\n\s*</div>', ''
        
        # Save the modified content
        Set-Content -Path $filePath -Value $content -NoNewline
        
        Write-Host "Processed: $service"
    } else {
        Write-Host "Not found: $service"
    }
}

Write-Host "Done!"
