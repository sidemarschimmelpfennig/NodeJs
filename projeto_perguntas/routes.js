const express = require("express");
const router = express.Router();

// Importa os Controladores
const questionController = require('./controllers/questionController')


router.get('/',(req, res)=>{   // Renderiza a página principal e pagina de perguntas 
    questionController.questions(req, res)
})

router.get('/question', (req, res)=>{  // Renderiza o página de resposta 
    res.render('respond')
})

router.get('/question/:id', (req, res)=>{  //Seleciona uma pergunta individualmente para ser respondida
    questionController.question(req, res)
})

router.get('/questioner', (req, res)=>{  // Renderiza o página de fazer pergunta 
    res.render('questioner')
})

router.post('/questioner', (req, res) => {  // Salva a pergunta no banco de dados
    questionController.saveQuestion(req, res)
});


router.post('/response', (req, res) => {  //Renderiza as respostas na tela e tambem posta elas
    questionController.response(req, res)
});


module.exports = router