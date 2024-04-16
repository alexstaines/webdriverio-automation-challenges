import VisualTestingDemoPage from "../page_objects/visual_testing/visual_testing_demo-page.js";

describe("Visual Testing", () => {
  it("Verify visual differences between pages", async () => {
    await VisualTestingDemoPage.open(VisualTestingDemoPage.Urls.Base);
    //await browser.getTitle().toHaveTextContaining("ACME demo app");

    await browser.saveFullPageScreen("full-page-snapshot");

    await expect(browser).toMatchFullPageSnapshot("full-page-snapshot");

    await VisualTestingDemoPage.open(VisualTestingDemoPage.Urls.Changed);
    //await browser.getTitle().toHaveTextContaining("ACME demo app");

    await expect(browser).toMatchFullPageSnapshot("full-page-snapshot");
  });
});
