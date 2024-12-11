const cors = require('cors');
const express = require('express')
const app = express()
const notFoundMiddleware = require('./middlewares/notFoundMiddleware.js')
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')
const PORT = 3000
const postsRoutes = require('./routes/movies.js')

app.use(cors())

app.use(express.json())

app.use('/', loggerMiddleware)

app.use('/movies', postsRoutes)

app.use(notFoundMiddleware);

app.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}`);
})