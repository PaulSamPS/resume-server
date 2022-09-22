const Router = require('express')
const router = new Router()
const menuController = require('../controllers/menu.controller')

router.post('/append', menuController.append)
router.get('/', menuController.getAll)

module.exports = router