import Page from "./page.js";

class AddRemoveElementPage extends Page {
  /* 
    define locators
   */
  get addElementBtn() {
    return $("[onclick='addElement()']");
  }
  get addedElementsDiv() {
    return $("[id='elements']");
  }
  get removeElementBtns() {
    return this.addedElementsDiv.$$("//button[contains(text(), 'Delete')]");
  }

  /* 
    page methods and functionality
   */
  open() {
    return super.open("/add_remove_elements/");
  }
  async clickAddElementsBtn(count) {
    for (let i = 0; i < count; i++) {
      await this.addElementBtn.click();
    }
  }
  getAddedElementsCount() {
    return this.removeElementBtns.length;
  }
  getRemoveElementBtnBy(index) {
    return this.removeElementBtns[index];
  }
  async removeAllElements() {
    while (await this.getAddedElementsCount() > 0) {
      await this.getRemoveElementBtnBy(0).click();
    }
  }
}

export default new AddRemoveElementPage();
