import TennisImage from "@/app/tennisImage/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

render(<TennisImage />)

test('query image by role', () => {
  const image = screen.getByRole('img', { name: /a new tennis image/i })
  expect(image).toBeInTheDocument()
})

test('query image by alt-test', () => {
  const image = screen.getByAltText(/a tennis player/i)
  expect(image).toBeInTheDocument()
})
