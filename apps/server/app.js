import express from 'express'
const app = express()
import runApp from './db/connect.js'
app.use(express.json())
app.use(express.urlencoded({extended: true}))
runApp().then((res) => console.log('oracle connected!')).catch((err) => console.error(err))
app.get('/', (req, res) => {
    res.send('Hello world!')
})

export default app