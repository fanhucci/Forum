import express from 'express';
import path from 'path';

const porta = 4000;
const host = '0.0.0.0';

const app = express();

app.use(express.static(path.join(process.cwd(),'./publico')));

app.listen(porta, host,() =>{
    console.log(`Servidor executando na porta http://${host}:${porta}`);
})