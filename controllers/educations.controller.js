const Educations = require('../models/educationsModel')

class EducationsController {
  async append(req, res) {
    const { name, years, position, company, description } = req.body
    const experienceName = await Educations.findOne({ name: name })
    if (experienceName) {
      res.status(500).message('Опыт с таким названием уже существует')
    }
    const project = await Educations.create({ name, years, position, company, description })
    return res.json({ project })
  }

  async getAll(req, res) {
    const experience = await Educations.find()
    return res.json(experience)
  }
}

module.exports = new EducationsController()
