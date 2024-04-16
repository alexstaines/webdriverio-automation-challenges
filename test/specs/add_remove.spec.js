import AddRemoveElementPage from "../page_objects/add_remove-page.js";

describe("Add and remove element page tests", () => {
  beforeEach(async () => {
    await AddRemoveElementPage.open();
  });
  it("Verify adding and removing of dynamic elements", async () => {
    const addCount = 5;
    const btnIndex = 2;

    // add elements
    await AddRemoveElementPage.clickAddElementsBtn(addCount);
    await expect(await AddRemoveElementPage.getAddedElementsCount()).toEqual(addCount);

    // remove one element
    await AddRemoveElementPage.getRemoveElementBtnBy(btnIndex).click();
    await expect(await AddRemoveElementPage.getAddedElementsCount()).toEqual(addCount - 1);

    // remove all elements
    await AddRemoveElementPage.removeAllElements();
    await expect(await AddRemoveElementPage.getAddedElementsCount()).toEqual(0);
  });
});
