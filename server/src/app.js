const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//------------DB Config -----------//
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.error('db is connect'))
  .catch(err => console.error('Db not connect '))
//------------Middlewares  -----------//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
//------------Routes  -----------//
app.post('/hello', (req,res) => {
    const name = req.body.name;
    res.send({
        message: `welcome ${name}`
    })
//   const product  = new Product(req.body)

//   product.save((err, product) => {
//       res.json({
//           product
//       })
//   })
});

module.exports = app ;