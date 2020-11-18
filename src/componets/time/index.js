import React from "react"

import "./time.css"

export default function Time({ label, time = "00" }) {
  return (
    <div className="time">
      <h2>{time}</h2>
      <span>{label}</span>
    </div>
  )
}
