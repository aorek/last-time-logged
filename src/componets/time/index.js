import React from "react"

import style from "./time.module.css"

export default function Time({ label, time = "00" }) {
  const twoDigitFormat = number => {
    return `0${number}`.slice(-2)
  }

  return (
    <div className={style.time}>
      <h2>{twoDigitFormat(time)}</h2>
      <span>{label}</span>
    </div>
  )
}
