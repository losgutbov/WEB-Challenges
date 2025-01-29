const express =  require('express');
const app = express();

let lista_tarefas = [];
let proximoId = 1;

//app.use(express.json());

app.post('/tarefas', (req, res) => {
    console.log(req.params);
    //lista_tarefas.push({'id': proximoId, 'descricao': descricao, 'concluida':false});
    lista_tarefas.push({'id': proximoId, 'concluida':false});
    proximoId++;
    res.send('Entrou em tarefas');
});


app.get('/tarefas', (req, res) =>{
    res.send(lista_tarefas);
});


app.put('/tarefas/:id/concluir', (req, res) =>{
    console.log(req.params.id);
    let tarefa = lista_tarefas.find(req.params.id);
    tarefa.concluida = true;
    res.send(tarefa);
});

// app.delete();

// app.get('/', (req, res) => {
//     res.send('Olá, mundo!');
// });


// app.get('/sobre', (req, res) => {
//     res.send('Página sobre nós');
// });


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
