const Router = require('express')
const router = new Router()
const skillsController = require('../controllers/skills.controller')

router.post('/append', skillsController.append)
router.get('/', skillsController.getAll)

module.exports = router