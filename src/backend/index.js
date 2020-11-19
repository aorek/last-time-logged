import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import { user as jsonData } from "./user.json"

export const config = {
  TOKEN_SEED: "TOKEN_SEED_REPLACE_IT",
  TOKEN_EXPIRE: "10d",
}

export default class Server {
  constructor() {
    this.initLocalStorage()
  }

  getUser = email => {
    const data = this.getData()
    return data.find(u => u.email === email)
  }

  setUser = user => {
    const data = this.getData()
    const i = data.indexOf(data.find(u => u.id === user.id))

    data[i] = user

    this.setData(data)
  }

  login = ({ email, password }) => {
    const user = this.getUser(email)

    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error("User or password incorrect")
    }
    const now = new Date(Date.now())
    /* if (!user.lastLogin) */ user.lastLogin = now

    // Update user lastLogin in db
    this.setUser({ ...user, lastLogin: now })

    delete user.password
    const token = jwt.sign(
      {
        data: user,
      },
      config.TOKEN_SEED,
      { expiresIn: config.TOKEN_EXPIRE, noTimestamp: true }
    )

    return { user, token }
  }

  getData = () => {
    return JSON.parse(localStorage.getItem("data"))
  }

  setData = data => {
    localStorage.setItem("data", JSON.stringify(data))
  }

  initLocalStorage = () => {
    const data = localStorage.getItem("data")

    if (!data) {
      localStorage.setItem("data", JSON.stringify(jsonData))
    }
  }
}
