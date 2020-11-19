import Server from "backend"

const server = new Server()

export default function loginService(data) {
  return server
    .login(data)
    .then(loginData => {
      const { token } = loginData

      if (token) {
        localStorage.setItem("token", token)
      }

      return loginData
    })
    .catch(e => {
      throw e
    })
}
