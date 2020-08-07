const puppeteer = require('puppeteer')
 
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('file://D:/electron/my-app/src/components/Invoice.html', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({path: 'D:/electron/my-app/server/InvoiceFiles/.invoice.pdf', format: 'A4' });
 
  await browser.close();
  return pdf
}





printPDF();