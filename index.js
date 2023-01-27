const express = require('express');
const { default: mongoose } = require('mongoose');
const { body, validationResult } = require('express-validator');
const contactRouter = require('./routes/contactRouter');
const productRouter = require('./routes/productRoutes')

const app = express();

mongoose.connect("mongodb+srv://cagatay:jYjpMvn5WXivq4uh@cluster0.imfaisw.mongodb.net/codeacademydb")
    .then(res => {
        console.log('Connect!');
    })
    .catch(err => {
        console.log('err', err);
    })

app.use('/api/contact', contactRouter);
app.use('/api/products', productRouter);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader(
      'Access-Control-Allow-Headers',
      '*',
    );
    next();
  });


app.use(function (req, res, next) {

    if (false) {
        res.status(401).json('Access error!');
    }
    else {
        next();
    }

})
app.use(express.json());
app.use(express.urlencoded());



app.get('/', function (req, res) {
    res.json("Hello");
})

app.listen(8080);




