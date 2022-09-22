const Projects = require('../models/projectsModel')
const path = require('path')
const uuid = require('uuid')

class ProjectsController {
  async append(req, res) {
    const { name, description, projectLink, gitHub } = req.body
    const { projectImg } = req.files
    let fileName = uuid.v4() + '.jpg'
    await projectImg.mv(path.resolve(__dirname, '..', 'static/projects', fileName))
    const projectName = await Projects.findOne({ name: name })
    if (projectName) {
      res.status(500).message('Проект с таким названием уже существует')
    }
    const project = await Projects.create({ name, projectImg: fileName, description, projectLink, gitHub })
    return res.json({ project })
  }

  async getAll(req, res) {
    const projects = await Projects.find()
    return res.json(projects)
  }
}

module.exports = new ProjectsController()
