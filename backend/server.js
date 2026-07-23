
require('dotenv').config();


const express = require('express');


const app = express();


const port = 3000;

app.get('/', (req, res) => {
    res.send('Il server Express è online e pronto!');
});


app.listen(port, () => {
    console.log(`App in ascolto sulla porta ${port}`);
});


const productRouter = require('./routers/productRouter');
const nutritionRouter = require('./routers/nutritionRouter');

app.use('/product', productRouter)
app.use('/nutrition', nutritionRouter)