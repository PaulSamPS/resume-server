const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        password: { type: String, required: true, select: false },
    },
    { timestamps: false }
)

module.exports = model('User', UserSchema)