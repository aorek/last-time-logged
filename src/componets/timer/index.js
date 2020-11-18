import React from "react"

import Time from "componets/time"

import "./timer.css"

export default function Timer() {
  return (
    <div className="timer">
      <Time label="days" />
      <Time label="hours" />
      <Time label="minutes" />
      <Time label="seconds" />
    </div>
  )
}
