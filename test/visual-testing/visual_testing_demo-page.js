import Page from "../page_objects/page.js";

class VisualTestingDemoPage extends Page {
  /* 
  define variables
   */
  pageTitle = "ACME demo app";
  Urls = {
    ACMEAPP_1: "https://demo.applitools.com/app.html",
    ACMEAPP_2: "https://demo.applitools.com/app_v2.html",
  };

  /* 
    page methods and functionality
   */
  open(url) {
    return super.open(url);
  }

  async openUrlAndVerifyTitleAndUrl(url) {
    await this.open(url);

    // verify correct url and title
    await expect(await browser.getUrl()).toContain(url);
    await expect(await browser.getTitle()).toContain(this.pageTitle);
  }
}

export default new VisualTestingDemoPage();
