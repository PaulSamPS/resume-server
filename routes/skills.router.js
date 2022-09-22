const Router = require('express')
const router = new Router()
const skillsController = require('../controllers/skills.controller')
const auth = require('../middleware/auth.middleware')

router.post('/append', auth, skillsController.append)
router.get('/', skillsController.getAll)

module.exports = router