import jwt from "jsonwebtoken"
import { useState } from "react"
import { useLocation } from "wouter"

import { config } from "backend"
import loginService from "services/login"

export default function useSession() {
  const [user, setUser] = useState(getUserFromLocalStorage())
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [error, setError] = useState(null)
  const [, navigate] = useLocation()

  const login = data => {
    loginService(data)
      .then(({ user, token }) => {
        setUser(user)
        setToken(token)

        navigate("home")
      })
      .catch(e => {
        setError(e)
      })
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate("login")
  }

  return {
    isLogged: Boolean(token),
    user,
    error,
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
