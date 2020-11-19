import React, { useState } from "react"

import useSession from "hooks/useSession"
import Lock from "componets/svg/lock"
import InputFormGroup from "componets/inputFormGroup"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useSession()

  const handleSubmit = e => {
    e.preventDefault()
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
            onChange={setEmail}
          />
          <InputFormGroup
            type="password"
            labelValue="Password"
            value={password}
            onChange={setPassword}
          />

          <button className="btn btn-primary mt-2">LOG IN</button>
        </form>
      </div>
    </div>
  )
}
