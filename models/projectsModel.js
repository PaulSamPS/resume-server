const { Schema, model } = require('mongoose')

const ProjectSchema = new Schema(
    {
        name: { type: String, required: true, unique: true},
        projectImg: { type: String, required: true},
        description: { type: String, required: true},
    },
    { timestamps: false }
)

module.exports = model('Project', ProjectSchema)