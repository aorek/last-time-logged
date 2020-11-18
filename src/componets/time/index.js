import React from "react"

import style from "./time.module.css"

export default function Time({ label, time = "00" }) {
  return (
    <div className={style.time}>
      <h2>{time}</h2>
      <span>{label}</span>
    </div>
  )
}
