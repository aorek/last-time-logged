import jwt from "jsonwebtoken"
import { useState } from "react"
import { useLocation } from "wouter"

import { config } from "config"
import loginService from "services/login-mock"

export default function useSession() {
  const [user, setUser] = useState(getUserFromLocalStorage())
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [, navigate] = useLocation()

  const login = data => {
    const { user, token } = loginService(data)

    setUser(user)
    setToken(token)

    localStorage.setItem("token", token)
    navigate("home")
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate("login")
  }

  return {
    isLogged: Boolean(token),
    user,
    login,
    logout,
  }
}

const getUserFromLocalStorage = () => {
  const token = localStorage.getItem("token")

  if (token) {
    const { data } = jwt.verify(token, config.TOKEN_SEED)
    return data
  }

  return undefined
}
