import React from "react"
import { useLocation } from "wouter"

import useSession from "hooks/useSession"

export function requireAuth(Component) {
  return props => {
    const [, navigate] = useLocation()
    const { isLogged } = useSession()

    if (!isLogged) navigate("login")

    return <Component {...props} />
  }
}
