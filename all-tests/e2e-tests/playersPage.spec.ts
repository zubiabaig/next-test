import { expect, test } from '@playwright/test'

test('locate heading element by role', async({page})=> {
  await page.goto('players')

  const headingA = page.getByRole('heading').filter({ hasText: 'Our awesome'})
  await expect(headingA).toContainText('players')
})

test('locate heading element by exact text', async({page})=>{
  await page.goto('/players')

  const headingB = page.getByText('Activities with teams:', { exact: true})
  await expect(headingB).toBeDefined()
})

test('locate paragraph element', async ({page})=>{
  await page.goto('/players')

  const playerActivities = page.locator('.activities-with-players').getByRole('paragraph')
  await expect(playerActivities).toContainText(['Learn', 'Speak', 'Compete','Write'])
})
