const Router = require('express')
const router = new Router()
const experienceController = require('../controllers/experience.controller')
const auth = require('../middleware/auth.middleware')

router.post('/append', auth, experienceController.append)
router.get('/', experienceController.getAll)

module.exports = router
