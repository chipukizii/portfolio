const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    const targets = [
        { url: 'https://rotichstore-2.onrender.com/', name: 'rotich.png' },
        { url: 'https://smartpharmacy.co.ke/', name: 'pharmacy.png' }
    ];

    for (const target of targets) {
        console.log(`Capturing ${target.url}...`);
        try {
            await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 60000 });
            await page.screenshot({ 
                path: path.join(__dirname, 'public', 'projects', target.name),
                fullPage: false 
            });
            console.log(`Saved ${target.name}`);
        } catch (e) {
            console.error(`Failed to capture ${target.name}: ${e.message}`);
        }
    }

    await browser.close();
})();
