const { Schema, model } = require('mongoose')

const SkillSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
    },
    { timestamps: false }
)

module.exports = model('Skill', SkillSchema)