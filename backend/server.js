require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json())

const port = 3000;
const productRouter = require('./routers/productRouter');
const nutritionRouter = require('./routers/nutritionRouter');
const authRouter = require('./routers/autenticationRouter')

app.get('/', (req, res) => {
    res.send('Il server Express è online e pronto!');
});

app.use('/product', productRouter)
app.use('/nutrition', nutritionRouter)
app.use('/', authRouter);

app.listen(port, () => {
    console.log(`App in ascolto sulla porta ${port}`);
});

