import React from "react"

import Time from "componets/time"

import style from "./timer.module.css"

export default function Timer() {
  return (
    <div className={style.timer}>
      <Time label="days" />
      <Time label="hours" />
      <Time label="minutes" />
      <Time label="seconds" />
    </div>
  )
}
