import VisualTestingDemoPage from "./visual_testing_demo-page.js";

describe("Visual Testing", () => {
  it("Verify visual differences between pages", async () => {
    // -- open first version of Applitools webpage --
    await VisualTestingDemoPage.openUrlAndVerifyTitleAndUrl(VisualTestingDemoPage.Urls.ACMEAPP_1);

    // save full page screenshot and match with current page
    await browser.saveFullPageScreen("full-page-snapshot");

    // -- open second version of Applitools webpage --
    await VisualTestingDemoPage.openUrlAndVerifyTitleAndUrl(VisualTestingDemoPage.Urls.ACMEAPP_2);

    // check that there exists a mismatch due to dynamic content (timer)
    const checkDifference = await browser.checkFullPageScreen("full-page-snapshot");
    await expect(checkDifference).toBeGreaterThan(0);
  });

  it("Validate dynamic content and timer", async () => {
    // -- open first version of Applitools webpage --
    await VisualTestingDemoPage.openUrlAndVerifyTitleAndUrl(VisualTestingDemoPage.Urls.ACMEAPP_1);

    // save full page screenshot and match with current page
    await browser.saveFullPageScreen("full-page-snapshot");

    // -- open second version of Applitools webpage --
    await VisualTestingDemoPage.openUrlAndVerifyTitleAndUrl(VisualTestingDemoPage.Urls.ACMEAPP_2);

    // check that there exists no mismatch, taking into account dynamic content (timer)
    const checkDifference = await browser.checkFullPageScreen("full-page-snapshot");
    await expect(checkDifference).toBeLessThan(0.3);
  });
});
