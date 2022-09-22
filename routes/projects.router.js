const Router = require('express')
const router = new Router()
const projectsController = require('../controllers/projects.controller')
const auth = require('../middleware/auth.middleware')

router.post('/append', auth, projectsController.append)
router.get('/', projectsController.getAll)

module.exports = router
