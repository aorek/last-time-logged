import React from "react"

import { requireAuth } from "utils/requireAuth"
import Timer from "componets/timer"
import useSession from "hooks/useSession"

function HomePage() {
  const { logout } = useSession()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="container">
      <div className="device">
        <h1>Welcome!</h1>
        <h5 className="subtitle mt--1">The last time you accessed was</h5>

        <Timer />

        <button className="btn btn-primary btn-sm m-6" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
    </div>
  )
}

export default requireAuth(HomePage)
