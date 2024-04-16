import Page from "./page.js";

class UploadPage extends Page {
  /* 
    define locators
   */
  get chooseFileBtn() {
    return $("[id='file-upload']");
  }
  get uploadBtn() {
    return $("[id='file-submit']");
  }
  // Upload successful screen
  get pageHeader() {
    return super.pageHeader;
  }
  get uploadedFilesPanel() {
    return $("[id='uploaded-files']");
  }

  /* 
    page methods and functionality
   */
  open() {
    return super.open("/upload");
  }
}

export default new UploadPage();
