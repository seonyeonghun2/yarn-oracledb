import app from '../../app.js'
import 'dotenv/config'

const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is Listening on port ${port}`)
    })
}