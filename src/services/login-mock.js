import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import { config } from "config"
import { user as jsonData } from "./user.json"

export default function loginService(data) {
  const user = getUser(data)

  if (!user || !bcrypt.compareSync(data.password, user.password)) {
    throw new Error("User or password incorrect")
  }

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

const getUser = ({ email, password }) => {
  return jsonData.find(u => u.email === email)
}
