import GrandSlam from "@/app/grandSlam/page";
import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from "vitest";

render(<GrandSlam/>)

test('has the tournament keyword', ()=>{
  const tournamentKeyword = within(screen.getByText(/tournament/i))

  expect(tournamentKeyword).toBeDefined()
})

describe('has all the four grand slam tournaments',()=>{
  test('has Australian Open tournament', ()=>{
    expect(screen.getByText(/australian open/i)).toBeDefined()
  })

  test('hast French Open tournament', ()=>{
    expect(screen.getByText(/french open/i)).toBeDefined()
  })

  test('hast Wimbledon tournament', ()=>{
    expect(screen.getByText(/wimbledon/i)).toBeDefined()
  })

  test('hast US Open tournament', ()=>{
    expect(screen.getByText(/us open/i)).toBeDefined()
  })
})

//This test case has the options arguments, using the object syntax to specify a skipped test
test('has the tennis keywords', { skip: true}, ()=>{
  const tennisKeyword = within(screen.getByText('tennis'))

  expect(tennisKeyword).toBeDefined()
})

// alternatively, you can indicate the options argument using the dot syntax to specify a skipped test
test.skip('this test case will be skipped', ()=> {})
describe.skip('this test suite will be skipped', ()=>{})
