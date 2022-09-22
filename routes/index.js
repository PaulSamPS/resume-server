const Router = require('express')
const router = new Router()

const userRouter = require('./user.router')
const menuRouter = require('./menu.router')
const skillsRouter = require('./skills.router')
const projectsRouter = require('./projects.router')
const experienceRouter = require('./experience.router')
const educationsRouter = require('./educations.router')

router.use('/user', userRouter)
router.use('/menu', menuRouter)
router.use('/skills', skillsRouter)
router.use('/projects', projectsRouter)
router.use('/experience', experienceRouter)
router.use('/educations', educationsRouter)

module.exports = router
