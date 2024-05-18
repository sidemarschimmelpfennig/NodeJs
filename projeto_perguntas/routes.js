const express = require("express");
const router = express.Router()



router.get('/',(req, res)=>{   // Renderiza a página principal
    res.render("index");
})


router.get('/question', (req, res)=>{  // Renderiza o página de pergunta 
    res.render('question')
})

router.post('/savequestion',(req, res)=>{  // Fazer a pergunta e salvar no banco
    res.send("Formulário Recebido !!")
})


module.exports = router