const express =require('express');
const app =express();

app.get('/', (req, res) => {
    res.send('Hello Manik');
})

app.listen(3000);