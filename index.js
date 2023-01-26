const express = require('express');
const { default: mongoose } = require('mongoose');
const { categoryService } = require('./service/categoryService');

const { Schema } = mongoose

const app = express();

mongoose.connect("mongodb+srv://cagatay:jYjpMvn5WXivq4uh@cluster0.imfaisw.mongodb.net/codeacademydb")
    .then(res => {
        console.log('Connect!');
    })
    .catch(err => {
        console.log('err', err);
    })



const webuserSchema = new Schema({
    name: String,
    email: String,
    city: [],
    isDeleted: {
        type: Boolean, default: false
    },
    addDate: { type: Date, default: Date.now }
})

const webUser = mongoose.model('WebUser', webuserSchema)


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

//POST-GET-GETBYID-PUT-DELETE

app.get('/api/webusers', (req, res) => {
    webUser.find({ isDeleted: false }, function (err, docs) {
        res.json(docs);
    })
})

app.get('/api/webusers/:id', (req, res) => {

    let id = req.params.id;
    webUser.findOne({ id: id, isDeleted: false }, function (err, doc) {
        res.json(doc)
    })

})

app.post('/api/webusers', (req, res) => {

    let newWebUser = new webUser({
        name: req.body.name,
        email: req.body.email,
        isDeleted: false
    })

    newWebUser.save(function (err, doc) {
        res.json(doc)
    })

})

app.delete('/api/webusers/:id', (req, res) => {

    let id = req.params.id;

    // webUser.findByIdAndDelete(id, function (err, docs) {
    //     res.json({ 'message': 'Success' });
    // })

    webUser.findById(id, function (err, doc) {

        doc.isDeleted = true;
        doc.save();
        res.json({'message':'success'})
    })

})

app.listen(8080);