const { Schema, model } = require('mongoose')

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    projectImg: { type: String, required: true },
    description: { type: String, required: true },
    projectLink: { type: String, required: true },
    gitHub: { type: String, default: null },
  },
  { timestamps: false }
)

module.exports = model('Project', ProjectSchema)
