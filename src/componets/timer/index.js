import React, { useCallback, useEffect, useState } from "react"

import Time from "componets/time"
import useSession from "hooks/useSession"

import style from "./timer.module.css"

export default function Timer() {
  const { user } = useSession()
  const [days, setDays] = useState("00")
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")

  const calculateTimeLeft = useCallback(() => {
    if (user) {
      const { lastLogin } = user

      const now = new Date().getTime()
      const countDownDate = new Date(lastLogin).getTime()

      const distance = Math.abs(countDownDate - now)

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }
  }, [user])

  useEffect(() => {
    calculateTimeLeft()
  }, [calculateTimeLeft])

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTimeLeft()
    }, 1000)

    return () => clearTimeout(timer)
  }, [calculateTimeLeft, days, hours, minutes, seconds])

  return (
    <div className={style.timer} role="timer">
      <Time label="days" time={days} />
      <Time label="hours" time={hours} />
      <Time label="minutes" time={minutes} />
      <Time label="seconds" time={seconds} />
    </div>
  )
}
