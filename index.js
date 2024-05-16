import express from 'express';

const porta = 4000;
const host = '0.0.0.0';

const app = express();

app.use(express.static('./publico'));

app.listen(porta, host,() =>{
    console.log(`Servidor executando na porta http://${host}:${porta}`);
})