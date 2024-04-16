import { dirname, join } from "path";
import { fileURLToPath } from "url";

import UploadPage from "../page_objects/upload-page.js";

describe("File upload page tests", () => {
  beforeEach(async () => {
    await UploadPage.open();
  });
  it("Verify that multiple files can be added to preview field and uploaded successfully", async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = "image1.webp";
    const filePath = join(__dirname, `../test_data/images/${file}`);

    await UploadPage.chooseFileBtn.setValue(filePath);
    await UploadPage.uploadBtn.click();

    await expect(UploadPage.pageHeader).toHaveTextContaining("File Uploaded");
    await expect(UploadPage.uploadedFilesPanel).toHaveTextContaining(file);
  });
});
