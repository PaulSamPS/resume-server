require('dotenv').config()
const express = require('express')
const connectDb = require('./db')
const cors = require('cors')
const routes = require('./routes/index')
const path = require('path')
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 5000

const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
)
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', routes)

const start = async () => {
    try {
        await connectDb()
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()