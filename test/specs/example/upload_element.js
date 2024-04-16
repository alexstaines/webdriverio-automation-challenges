import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

describe('Upload tests', () => {
    it('simple upload test', async () => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        await browser.url('https://the-internet.herokuapp.com/upload');

        const filePath = join(__dirname, '../data/logotitle.webp');

        const removeFilePath = await browser.uploadFile(filePath);

        await $('#file-upload').setValue(removeFilePath);

        await $('#file-submit').click();

        await expect($('h3')).toHaveText('File Uploaded!');
    });
    //executing javascript to show hidden elements
    it('Upload on hidden input field', async () => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        await browser.url('https://practice.sdetunicorns.com/cart');

        const filePath = join(__dirname, '../data/pic.png');

        const removeFilePath = await browser.uploadFile(filePath);

        await browser.execute("document.querySelector('#upfile_1').className = ''");

        await $('#upfile_1').setValue(removeFilePath);
        await $('#upload_1').click();

        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
    });
    it('Upload on hidden input field incorrect file type', async () => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        await browser.url('https://practice.sdetunicorns.com/cart');

        const filePath = join(__dirname, '../data/logotitle.webp');

        const removeFilePath = await browser.uploadFile(filePath);

        await browser.execute("document.querySelector('#upfile_1').className = ''");

        await $('#upfile_1').setValue(removeFilePath);
        await $('#upload_1').click();

        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('not uploaded');
    });
});