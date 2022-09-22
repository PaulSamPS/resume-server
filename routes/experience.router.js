const Router = require('express')
const router = new Router()
const experienceController = require('../controllers/experience.controller')

router.post('/append', experienceController.append)
router.get('/', experienceController.getAll)

module.exports = router
