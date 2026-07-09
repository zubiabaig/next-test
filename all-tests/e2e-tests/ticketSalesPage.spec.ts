//@ts-check

import test, { expect } from "@playwright/test";

test('ticket sales page updated with the accepted ticket type response', async ({page})=>{
  await page.goto('/ticketSales')

  //@ts-ignore
  // const validTicketResponse = 'regular' || 'vip' || 'vvip'

  await page.getByLabel('ticket-type').fill('regular')
  await page.getByRole('button', { name: 'Buy Ticket'}).click()

  const validTicketStatus = page.getByRole('heading')
  await expect(validTicketStatus).toContainText('an exquisite regular ticket')
})

test('ticket sales pages updates invalid ticket type response', async({page})=>{
  await page.goto('/ticketSales')

  await page.getByLabel('ticket-type').fill('invalid ticket')
  await page.getByRole('button',{ name: 'Buy Ticket'}).click()

  const invalidTicketStatus = page.getByRole('heading')
  await expect(invalidTicketStatus).not.toContainText('an exquisite VIP')
  await expect(invalidTicketStatus).toContainText('invalid ticket')
})
