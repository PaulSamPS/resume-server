const Router = require('express')
const router = new Router()
const projectsController = require('../controllers/projects.controller')

router.post('/append', projectsController.append)
router.get('/', projectsController.getAll)

module.exports = router
