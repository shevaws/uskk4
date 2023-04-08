const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz');
const materiRoute = require('./router/materi');
const jobsheetRoute = require('./router/jobsheet');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz API by Raka Andriy Shevchenko');
})

app.use('/api/quizzes', quizRoute)
app.use('/api/materi', materiRoute)
app.use('/api/jobsheet', jobsheetRoute)

app.listen(port, () => console.log(`App listening to port http://localhost:${port}!`));