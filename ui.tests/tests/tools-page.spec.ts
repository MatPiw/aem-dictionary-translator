import { test } from "@playwright/test";

test("Go to the dictionaries tool via the AEM shell", async ({ page }) => {
  await page.goto("/aem/start.html");

  await page.getByLabel("Tools").click();
  await page.getByLabel("Translation", { exact: true }).click();
  await page.getByLabel("Dictionaries").click();

  await page.waitForURL("/tools/translation/dictionaries.html")
});