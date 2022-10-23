const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('first')
        // const url = req.url
        // if (url === '/contact') {
        //     res.send('<h1>hello3</h1>')
        // } else if (url === '/home') {
        //     res.send('<h1>hello5</h1>')
        // }
    res.send('<h1>hello1</h1>')
    next()
})
app.use((req, res, next) => {

    const url = req.url;

    console.log('second')
    res.send('<h1>hello2</h1>')
})


app.listen(3000);