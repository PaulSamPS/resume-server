const User = require('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: '24h',
  })
  return {
    accessToken,
  }
}

class UserController {
  async registration(req, res) {
    try {
      const { name, password } = req.body

      if (!name) {
        return res.status(500).message('Некорректный email')
      }
      if (!password) {
        return res.status(500).message('Некорректный пароль')
      }

      const hashPassword = await bcrypt.hash(password, 5)

      const user = await User.create({
        name,
        password: hashPassword,
      })

      const token = generateTokens({name: user.name})
      return res.json(token)
    } catch (e) {
      console.log(e)
    }
  }

  async login(req, res) {
    try {
      const { name, password } = req.body
      const user = await User.findOne({ name: name }).select('+password')
      if (!user) {
        return res.status(500).message('Неверный логин')
      }
      let comparePassword = await bcrypt.compareSync(password, user.password)
      if (!comparePassword) {
        return res.status(500).message('Неверный пароль')
      }
      const token = generateTokens({name: user.name})
      return res.json(token)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new UserController()
