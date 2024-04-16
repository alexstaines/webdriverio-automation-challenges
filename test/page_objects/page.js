export default class Page {
  get pageHeader() {
    return $("h3");
  }

  open(url) {
    return browser.url(url);
  }
}
