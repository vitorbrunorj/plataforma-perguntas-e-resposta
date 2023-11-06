const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Para o Express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarPergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  res.send(
    `Formulário recebido! Título: ${titulo} Descrição: ${descricao}`
  );
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
