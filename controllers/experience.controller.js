const Experience = require('../models/experienceModel')

class ExperienceController {
  async append(req, res) {
    const { name, type, position, desc, projectLink } = req.body
    const experienceName = await Experience.findOne({ name: name })
    if (experienceName) {
      res.status(500).message('Опыт с таким названием уже существует')
    }
    const project = await Experience.create({ name, type, position, desc, projectLink })
    return res.json({ project })
  }

  async getAll(req, res) {
    const experience = await Experience.find()
    return res.json(experience)
  }
}

module.exports = new ExperienceController()
