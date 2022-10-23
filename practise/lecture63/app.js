const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('zero')
    next();

})


app.use('/product-page', (req, res, next) => {
    console.log('first')
    res.send('<h1>hello from product page</h1>')

})
app.use('/', (req, res, next) => {

    const url = req.url;

    console.log('second')
    res.send('<h1>hello from home page</h1>')
})


app.listen(3000);