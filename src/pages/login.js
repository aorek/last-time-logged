import React, { useState } from "react"

import Lock from "componets/svg/lock"
import InputFormGroup from "componets/inputFormGroup"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <Lock height="150px" />

      <form>
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
  )
}
