const Educations = require('../models/educationsModel')

class EducationsController {
  async append(req, res) {
    const { name, author, desc } = req.body
    const experienceName = await Educations.findOne({ name: name })
    if (experienceName) {
      res.status(500).message('Опыт с таким названием уже существует')
    }
    const project = await Educations.create({ name, author, desc })
    return res.json({ project })
  }

  async getAll(req, res) {
    const experience = await Educations.find()
    return res.json(experience)
  }
}

module.exports = new EducationsController()
