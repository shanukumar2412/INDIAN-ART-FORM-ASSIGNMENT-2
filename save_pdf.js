const puppeteer = require("puppeteer");
const OUTPUT_PATH = "C:\\Users\\shanu\\OneDrive\\Desktop\\Indian_Art_Map_Assignment.pdf";
(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  console.log("Navigating...");
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  console.log("Scrolling...");
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let total = 0;
      const t = setInterval(() => {
        window.scrollBy(0, 600);
        total += 600;
        if (total >= document.body.scrollHeight) { clearInterval(t); window.scrollTo(0,0); resolve(); }
      }, 200);
    });
  });
  await new Promise(r => setTimeout(r, 3000));
  await page.addStyleTag({ content: "* { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; } @page { margin: 10mm; }" });
  console.log("Generating PDF...");
  await page.pdf({ path: OUTPUT_PATH, format: "A4", printBackground: true, margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" } });
  await browser.close();
  console.log("PDF saved to: " + OUTPUT_PATH);
})();
