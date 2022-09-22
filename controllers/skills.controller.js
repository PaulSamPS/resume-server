const Skills = require('../models/skillsModel')

class SkillsController {
    async append(req, res) {
        const { name } = req.body
        const skillName = await Skills.findOne({ name: name })
        if (skillName) {
            res.status(500).message('Навык с таким названием уже существует')
        }
        const level = await Skills.create({ name })
        return res.json({ level })
    }

    async getAll(req, res) {
        const skills = await Skills.find()
        return res.json(skills)
    }
}

module.exports = new SkillsController()
