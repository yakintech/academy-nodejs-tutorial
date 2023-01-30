const express = require('express');
const { default: mongoose } = require('mongoose');
const contactRouter = require('./routes/contactRouter');
const productRouter = require('./routes/productRoutes');
const categoryRouter = require('./routes/categoryRouter');
const adminUserRouter = require('./routes/adminUserRouter');


const app = express();

const cors = require("cors");
var jwt = require('jsonwebtoken');
const { adminUserControl } = require('./utils/auth/AdminUserHelper');
const { adminUser } = require('./models/AdminUser');

let privateKey = "ironmaidenironmaidenironmaidenironmaiden";



app.use(express.json());
app.use(express.urlencoded());

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use((req, res, next) => {

    if (req.url == '/token') {
        next();
    }

    let auth = req.headers.authorization?.split(' ');
    let token = '';

    if (auth) {
        if (auth.length == 2) {
            token = auth[1];
        }
        else {
            res.status(401).json({ 'message': 'Access Error!' })
        }
    }
    else {
        res.status(401).json({ 'message': 'Access Error!' })
    }



    jwt.verify(token, privateKey, function (err, decode) {
        if (err) {
            res.status(401).json(err);
        }
        else {
            next()
        }
    })

})

mongoose.connect("mongodb+srv://cagatay:jYjpMvn5WXivq4uh@cluster0.imfaisw.mongodb.net/codeacademydb")
    .then(res => {
        console.log('Connect!');
    })
    .catch(err => {
        console.log('err', err);
    })

app.use('/api/contact', contactRouter);
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/adminusers', adminUserRouter);


app.post('/token', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    // let adminUsercontrol = await adminUserControl(email, password);

    if (true) {

        let token = jwt.sign({ email: 'a@a.com' }, privateKey, {
            algorithm: 'HS256',
            expiresIn: '5h'
        });
        res.json({ 'token': token })
    }
    else {
        res.status(401).send('Hayırdır gardaş');
    }

})


app.get('/', function (req, res) {
    res.json("Hello");
})

app.listen(8080);




