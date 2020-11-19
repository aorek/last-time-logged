import React, { useState } from "react"

import useSession from "hooks/useSession"
import Lock from "componets/svg/lock"
import InputFormGroup from "componets/inputFormGroup"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { error, login, setError } = useSession()

  const handleSubmit = e => {
    e.preventDefault()

    if (!email || !password) {
      setError(new Error("Email or password are empty"))
      return
    }

    login({ email, password })
  }

  return (
    <div className="container">
      <div className="device">
        <Lock height="150px" />

        <form onSubmit={handleSubmit}>
          <InputFormGroup
            type="email"
            labelValue="Username"
            value={email}
            role="email"
            onChange={setEmail}
          />
          <InputFormGroup
            type="password"
            labelValue="Password"
            value={password}
            role="password"
            onChange={setPassword}
          />

          <button className="btn btn-primary mt-2">LOG IN</button>

          {error && (
            <div role="alert" className="alert alert-outline-danger">
              {error.message}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
