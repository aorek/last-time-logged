import Server from "backend"

const server = new Server()

export default function loginService(data) {
  const loginData = server.login(data)
  const { token } = loginData

  if (token) {
    localStorage.setItem("token", token)
  }

  return loginData
}
