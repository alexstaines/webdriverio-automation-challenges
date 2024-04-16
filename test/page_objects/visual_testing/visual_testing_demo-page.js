import Page from "../page.js";

class VisualTestingDemoPage extends Page {
  Urls = {
    Base: "https://demo.applitools.com/app.html",
    Changed: "https://demo.applitools.com/app_v2.html",
  }
  /* 
    define locators
   */
  get logoImg() {
    return $(".logo");
  }

  /* 
    page methods and functionality
   */
  open(url) {
    return super.open(url);
  }
}

export default new VisualTestingDemoPage();
