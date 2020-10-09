require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user')


const port = process.env.PORT || 4500;

app.use(express.static('public')) // 이건 왜??
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // true false 차이는?

const mgoptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, mgoptions)
    .then(() => console.log('!!Succesfully connected to mongodb!!'))
    .catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send('Hello World!!!')
})


app.use('/user', userRouter);


app.listen(port, () => console.log(`app is listening in PORT http://localhost:${port}`))
