const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const {PORT, MONGO_URL} = require("./configs/configs");

const app = express();
app.use(express.json());
mongoose.set('strictQuery', false)

app.get('/', (req, res) => {
    console.log('REQUEST get / PROCESSED');
    res.json('Res body get /');
});


app.listen(PORT, () => {
    console.log(`App listen port ${PORT}`);
    mongoose.connect(MONGO_URL).then(() => {
        console.log(`Connected to database CarSpace ${MONGO_URL}`)
    });
})