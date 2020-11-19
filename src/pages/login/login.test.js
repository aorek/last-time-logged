import React from "react"
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"

import Login from "./"

afterEach(cleanup)

describe("Unit tests", () => {
  it("should show error if email is empty", async () => {
    const { getByText, getByRole } = render(<Login />)

    const passwordInput = getByRole("password")
    const submitButton = getByText("LOG IN")

    act(() => {
      fireEvent.change(passwordInput, { target: { value: "asd" } })
    })

    fireEvent.click(submitButton)
    await waitFor(() => {
      const alert = getByRole("alert")

      expect(alert).toBeInTheDocument()
      expect(alert).toHaveTextContent("Email or password are empty")
    })
  })

  it("should show error if password is empty", async () => {
    const { getByText, getByRole } = render(<Login />)

    const emailInput = getByRole("email")
    const submitButton = getByText("LOG IN")

    act(() => {
      fireEvent.change(emailInput, { target: { value: "asd@asd.com" } })
    })

    fireEvent.click(submitButton)
    await waitFor(() => {
      const alert = getByRole("alert")

      expect(alert).toBeInTheDocument()
      expect(alert).toHaveTextContent("Email or password are empty")
    })
  })

  it("should show error because email is wrong", async () => {
    const { getByText, getByRole } = render(<Login />)

    const emailInput = getByRole("email")
    const passwordInput = getByRole("password")
    const submitButton = getByText("LOG IN")

    act(() => {
      fireEvent.change(emailInput, { target: { value: "asd@asd.com" } })
      fireEvent.change(passwordInput, { target: { value: "1234" } })
    })

    fireEvent.click(submitButton)
    await waitFor(() => {
      const alert = getByRole("alert")

      expect(alert).toBeInTheDocument()
      expect(alert).toHaveTextContent("User or password incorrect")
    })
  })

  it("should show error because password is wrong", async () => {
    const { getByText, getByRole } = render(<Login />)

    const emailInput = getByRole("email")
    const passwordInput = getByRole("password")
    const submitButton = getByText("LOG IN")

    act(() => {
      fireEvent.change(emailInput, { target: { value: "test1@test.com" } })
      fireEvent.change(passwordInput, { target: { value: "asd" } })
    })

    fireEvent.click(submitButton)
    await waitFor(() => {
      const alert = getByRole("alert")

      expect(alert).toBeInTheDocument()
      expect(alert).toHaveTextContent("User or password incorrect")
    })
  })
})
