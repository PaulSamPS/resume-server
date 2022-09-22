const { Schema, model } = require('mongoose')

const EducationsSchema = new Schema(
  {
    name: { type: String},
    author: { type: String},
    desc: { type: String},
  },
  { timestamps: false }
)

module.exports = model('Education', EducationsSchema)
