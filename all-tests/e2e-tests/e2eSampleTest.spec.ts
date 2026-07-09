//@ts-check

import { expect, test } from '@playwright/test'

test('should redirect to players page', async ({page})=>{

  // visit sample page url
  await page.goto('/sample', { timeout: 60000})

  // locate heading element
  const heading = page.getByRole('heading')

  // locate link element from heading locator
  await heading.getByText('Meet the players', { exact: true }).click()

  // wait for players url to load
  await page.waitForURL(/.*\/players/)

  // assert that the current page url is exactly the players url

  await expect(page).toHaveURL(/.*\/players/)
})
