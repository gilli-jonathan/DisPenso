// 1. Carichiamo le variabili d'ambiente il prima possibile
require('dotenv').config();

// 2. Importiamo express dal pacchetto installato tramite NPM
const express = require('express');

// 3. Inizializziamo l'oggetto app
const app = express();

// 4. Definiamo la porta su cui il server rimarrà in ascolto
const port = 3000;

// 5. Definiamo la nostra prima rotta di test
app.get('/', (req, res) => {
    res.send('Il server Express è online e pronto!');
});

// 6. Avviamo il server
app.listen(port, () => {
    console.log(`App in ascolto sulla porta ${port}`);
});

// ... (codice precedente: require dotenv, express, const app = express())

// 1. Importiamo il router appena creato
const productRouter = require('./routers/productRouter');

// 2. Diciamo ad Express: "Tutte le richieste che iniziano con /alimenti, passale ad alimentiRouter"[cite: 6]
app.use('/product', productRouter);

// ... (codice successivo: app.get di test e app.listen)