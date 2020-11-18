import React from "react"
import { Router, useLocation } from "wouter"

const CustomRouter = props => {
  const [localtion, navigate] = useLocation()

  if (localtion === "/") navigate("home")

  return <Router {...props} />
}

export default CustomRouter
