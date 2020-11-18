import React from "react"

export default function Time({ label, time = "00" }) {
  return (
    <div className="time">
      <h2>{time}</h2>
      <span>{label}</span>
    </div>
  )
}
