const express =  require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});


app.get('/sobre', (req, res) => {
    res.send('Página sobre nós');
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
