const Router = require('express')
const router = new Router()
const menuController = require('../controllers/menu.controller')
const auth = require('../middleware/auth.middleware')

router.post('/append', auth, menuController.append)
router.get('/', menuController.getAll)

module.exports = router