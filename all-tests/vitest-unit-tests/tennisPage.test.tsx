import Tennis from "@/app/sports/tennis/page";
import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";

render(<Tennis />)

test('heading element with the word: the modern tennis, contains the word: game', () => {
  // query heading elements by role and filter based on its level and test name
  const tennisDescription = screen.getByRole('heading', { level: 2, name: /the modern tennis/i })

  expect(tennisDescription).toHaveTextContent('game')
})

test('tennis game history includes the word: england', () => {
  const tennisHistory = screen.getByRole('heading', { level: 3, name: /history/i })
  //query child element by text
  const country = within(tennisHistory).getByText(/england/i)
  expect(tennisHistory).toContain(country)

  expect(tennisHistory).not.toHaveTextContent(/france/i)
})

test('tennis rule includes the word: singles, doubles, and mixed doubles', () => {
  const tennisRule = screen.getByRole('heading', { level: 2, name: /tennis game is played in/i })
  expect(tennisRule).toHaveTextContent(/singles/i)
  expect(tennisRule).toHaveTextContent(/doubles/i)
  expect(tennisRule).toHaveTextContent(/mixed doubles/i)
})

test('grand slam has four tournaments', () => {
  // query list items
  const grandSlam = screen.getAllByRole('listitem')
  expect(grandSlam).toHaveLength(4)
})

test('the buy ticket button is active', () => {
  // query elements based on aria states and filter based on aria attributes
  const activeButton = screen.getByRole('tab', { busy: true })
  expect(activeButton).toHaveTextContent(/buy ticket/i)
})

test('tennis court description includes the word net', () => {
  //query nested element from the parent element
  const tennisCourt = screen.getByRole('heading', { level: 4, name: /the tennis court is a/i })
  const tennisCourtItem = within(tennisCourt).getByRole('textbox')
  expect(tennisCourtItem).toHaveTextContent(/net/i)
})
