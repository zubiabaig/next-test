import Cuisine from "@/app/cuisine/page";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { expect, test } from "vitest";

render(<Cuisine />)

test('italian cuisines are displayed when italian cuisine button is clicked', async() => {
  const user = userEvent.setup()

  const italianButton = screen.getByRole('button', { name: /italian/i })

  await user.click(italianButton)

  expect(screen.getByText(/Margarita/i)).toBeInTheDocument()
  expect(screen.getByText(/Lasagna/i)).toBeInTheDocument()
  expect(screen.getByText(/Fettucini/i)).toBeInTheDocument()
  expect(screen.getByText(/Bruschetta/i)).toBeInTheDocument()
})

test('french cuisines are displayed when french cuisine button is clicked', async() => {
  const user = userEvent.setup()

  const frenchButton = screen.getByRole('button', { name: /french cuisine/i })

  await user.click(frenchButton)

  expect(screen.getByText(/Escargots/i)).toBeInTheDocument()
  expect(screen.getByText(/Macarons/i)).toBeInTheDocument()
  expect(screen.getByText(/Coq au vin/i)).toBeInTheDocument()
  expect(screen.getByText(/French onion soup/i)).toBeInTheDocument()
})
