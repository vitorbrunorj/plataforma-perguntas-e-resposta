# Plataforma de Perguntas e Respostas

## Descrição
Uma plataforma de perguntas e respostas no estilo Yahoo, desenvolvida por Vitor Bruno como parte de seu portfólio. Este projeto demonstra habilidades em desenvolvimento web, incluindo o uso do Node.js, Express, EJS, e MySQL com o Sequelize. A plataforma permite aos usuários fazer perguntas, fornecer respostas e interagir em uma comunidade de conhecimento.

## Recursos Principais
- **Perguntas e Respostas:** Os usuários podem fazer perguntas e fornecer respostas a outras perguntas, promovendo a colaboração e o compartilhamento de conhecimento.

## Pré-requisitos
Antes de executar o projeto, certifique-se de ter o seguinte instalado:
- Node.js
- MySQL

## Instalação
1. Clone o repositório do GitHub:
git clone https://github.com/vitorbrunorj/plataforma-perguntas-e-resposta.git

2. Navegue até o diretório do projeto:

3. Instale as dependências:

4. Configure o banco de dados MySQL no arquivo `database/database.js`.

## Uso
1. Inicie o servidor:

2. Acesse a plataforma em seu navegador em `http://localhost:3000`.

## Estrutura do Projeto
- `index.js`: Arquivo principal do servidor Express.
- `database/database.js`: Configuração da conexão com o banco de dados.
- `database/Pergunta.js` e `database/Resposta.js`: Modelos para perguntas e respostas usando o Sequelize.
- `views/`: Contém os arquivos EJS para renderização das páginas.
- `public/`: Contém arquivos estáticos como CSS, JavaScript e imagens.
- `routes/`: Contém os arquivos de rotas para diferentes partes da aplicação.

## Exemplo de Código
Aqui está um trecho de código que mostra como as perguntas são criadas e renderizadas:

```javascript
app.post('/salvarPergunta', (req, res) => {
let titulo = req.body.titulo;
let descricao = req.body.descricao;
Pergunta.create({
 titulo: titulo,
 descricao: descricao,
}).then(() => {
 res.redirect('/');
});
}

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests) para melhorar este projeto.

## Autor
Nome: Vitor Bruno
GitHub: vitorbrunorj