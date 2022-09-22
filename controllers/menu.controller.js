const Menu = require('../models/menuModel')

class MenuController {
    async append(req, res) {
        const { name } = req.body
        const menuName = await Menu.findOne({ name: name })
        if (menuName) {
            res.status(500).message('Меню с таким названием уже существует')
        }
        const menu = await Menu.create({ name })
        return res.json({ menu })
    }

    async getAll(req, res) {
        const menu = await Menu.find()
        return res.json(menu)
    }
}

module.exports = new MenuController()
