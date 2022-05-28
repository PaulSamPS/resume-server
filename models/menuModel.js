const { Schema, model } = require('mongoose')

const MenuSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
    },
    { timestamps: false }
)

module.exports = model('Menu', MenuSchema)