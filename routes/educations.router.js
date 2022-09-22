const Router = require('express')
const router = new Router()
const educationsController = require('../controllers/educations.controller')

router.post('/append', educationsController.append)
router.get('/', educationsController.getAll)

module.exports = router
