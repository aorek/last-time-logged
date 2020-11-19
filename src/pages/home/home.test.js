import React from "react"
import { render, cleanup } from "@testing-library/react"

import Home from "./"

afterEach(cleanup)

it("should render", async () => {
  const { getByText, getByRole } = render(<Home />)

  const title = getByText("Welcome!")
  const subtitle = getByText("The last time you accessed was")
  const timer = getByRole("timer")
  const button = getByText("LOGOUT")

  expect(title).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()
  expect(timer).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})
