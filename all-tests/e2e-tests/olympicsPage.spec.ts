import test, { expect } from "@playwright/test";

test('mock the olympic api', async({page})=>{
  //mock the api call before navigating
  page.route("http://127.0.0.1:3000/api/olympics", async (route)=>{
    const json = {
      id: "2",
      name: "Archery",
      about: "Archery is one of the oldest sports still practised, and is closely linked to the development of civilisation. Using bows and arrows, the sport has a history dating back thousands of years.",
      rules: "That depends on the type of archery being practised as sport, with different disciplines and rules regarding the type of bow that can be used. At the Olympics, outdoor target archery is practised with recurve bows."
    }
    await route.fulfill({ json })
  })

  // go tho olympics page
  await page.goto('/olympics')

  // assert that certain words are visible
  await expect(page.getByText(/the olympics/)).toBeDefined()

  await expect(page.getByText(/Using bows and arrows/)).toBeDefined()
})

test('modify the olympics api', async ({page})=>{
  await page.route("http://127.0.0.1:3000/api/olympics", async (route)=>{
    //make network request
    const response = await route.fetch()
    const json = await response.json()

    json.push({
      id: "3",
      name: "Swimming",
      about: "Swimming at the Olympics is both an individual and team sport where competitors propel their bodies through water in either an outdoor or indoor swimming pool using one of the following strokes: Freestyle, backstroke, breaststroke, or butterfly.",
      rules: "Athletes race using one of four strokes - freestyle, backstroke, breaststroke and butterfly - or all of them in the individual medley (IM) events."
    })

    // fulfill using the original response, while patching the response body with the given JSON object.
    await route.fulfill({ response, json})
  })

  // ago to the olympics page
  await page.goto('/olympics')

  //assert that certain words are visible
  await expect(page.getByText(/the olympics/)).toBeDefined()
  await expect(page.getByText(/propel their bodies through water/)).toBeDefined()
})
