import { useState } from "react"

export default function useSession() {
  const [token, setToken] = useState("")

  const login = data => {}

  const logout = () => {}

  return {
    isLogged: Boolean(token),
    login,
    logout,
  }
}
