const { Schema, model } = require('mongoose')

const EducationsSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    years: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: false }
)

module.exports = model('Education', EducationsSchema)
