const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
//Database

connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados!');
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

// Para o Express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(
    (perguntas) => {
      res.render('index', {
        perguntas: perguntas,
      });
    }
  );
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarPergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
