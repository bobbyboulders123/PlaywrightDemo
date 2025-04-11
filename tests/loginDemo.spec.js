const {test, expect} = require('@playwright/test')
const { exitCode } = require('process')

test("Verify Login", async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const username = "Admin"
    const password = "admin123"

    await page.getByPlaceholder("Username").fill(username)

    await page.locator('input[name="password"]').fill(password)

    await page.locator("//button[@type='submit']").click()

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL(/dashboard/)

    await page.locator("//span[@class='oxd-userdropdown-tab']").click()
    
    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/)

    await page.waitForTimeout(3000)
})