// Import the Playwright configuration
import config from '../playwright.config.js'
import { test, expect } from '@playwright/test'

test.describe('Accessibility tests', () => {
  let page

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto(config.use.baseURL + '/contact') // Use the Contact page URL
    await page.setViewportSize({ width: 1280, height: 800 })
  })

  test.afterEach(async () => {
    await page.close()
  })


