const Router = require('express')
const router = new Router()
const educationsController = require('../controllers/educations.controller')
const auth = require('../middleware/auth.middleware')

router.post('/append', auth, educationsController.append)
router.get('/', educationsController.getAll)

module.exports = router
