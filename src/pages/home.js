import React from "react"

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="mt--10">Welcome!</h1>
      <h5 className="subtitle mt--1">The last time you accessed was</h5>

      <div className="timer">
        <div className="time">
          <h2>00</h2>
          <span>days</span>
        </div>

        <div className="time">
          <h2>00</h2>
          <span>hours</span>
        </div>

        <div className="time">
          <h2>00</h2>
          <span>minutes</span>
        </div>

        <div className="time">
          <h2>00</h2>
          <span>seconds</span>
        </div>
      </div>
    </div>
  )
}
