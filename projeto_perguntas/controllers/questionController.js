const { response } = require('express');
const { questionModel , responseModel} = require('../database/')


exports.saveQuestion = (req,res) => {
    let title = req.body.title;
    let description = req.body.description;

    questionModel.create({
        title: title,
        description: description
    })
    .then(() => {
        res.redirect("/");
    })
    .catch((err) => {
        console.error("Erro ao salvar pergunta:", err);
        res.status(500).send("Erro ao salvar pergunta");
    });
}

exports.questions = (req, res) => {
    questionModel.findAll({raw : true, order:[
        ['id', 'DESC'] // ASC === Crescente || DESC === Decrescente 
    ]}).then(response => {
        res.render("index",{
            questions : response,
        })
    }).catch((err) =>{
        console.error("Erro ao buscar perguntas:", err)
        res.status(500).send("Erro ao buscar perguntas")
    })
}

exports.question = (req, res) =>{
    let id = req.params.id
    questionModel.findOne({where : {id : id}})
    .then(question =>{
        if(question != undefined){
            responseModel.findAll({
                where : { questionId : question.id },
                order :[ 
                    ['id', 'DESC']
                ]
            }).then(responses =>{
                res.render('question',{
                    question : question,
                    responses : responses
                })
            })
           
        }else{
            res.redirect('/')
        }
    })
}

exports.response = (req, res) =>{
    let body = req.body.bodyResponse
    let questionId = req.body.question

    responseModel.create({
        body : body,
        questionId : questionId
    }).then(()=>{
        res.redirect(`/question/${questionId}`)
    })
}

module.exports = exports