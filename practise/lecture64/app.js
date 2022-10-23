const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', (req, res, next) => {
    console.log('zero')
    next();

})


app.use('/product-page', (req, res, next) => {
    console.log('first')
    res.send('<form action ="/product" method="POST"><input type="text" name="test"><button type="submit">Add Product</button></form>')

})



app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})







app.use('/', (req, res, next) => {

    const url = req.url;

    console.log('second')
    res.send('<h1>hello from home page</h1>')
})


app.listen(3000);