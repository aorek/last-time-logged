import React from "react"

import Timer from "componets/timer"

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <h5 className="subtitle mt--1">The last time you accessed was</h5>

      <Timer />

      <button className="btn btn-primary btn-sm m-6">LOGOUT</button>
    </div>
  )
}
