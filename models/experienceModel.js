const { Schema, model } = require('mongoose')

const ExperienceSchema = new Schema(
    {
        type: { type: String},
        position: { type: String},
        name: { type: String},
        desc: { type: String},
        projectLink: { type: String},
    },
    { timestamps: false }
)

module.exports = model('Experience', ExperienceSchema)