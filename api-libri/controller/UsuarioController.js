/* IMPORTA O MÓDULO DO express */
const express = require('express');

/* IMPORTA O MODEL DE CATEGORIA */
const livro = require('../model/Usuario');

/* CONFIGURA A FUNCIONALIDA DE ROTAS  */
const router = express.Router();

router.get('/usuario/listarUsuario/:login/:senha', (req, res)=>{

    const { login, senha } = req.params;

    livro.findAll({
        where:{
            login,
            senha
        }
    })
    .then(
            (usuario)=>{
                res.status(200).json(usuario);
            }       
    );

});

router.post('/usuario/cadastrarUsuario', (req, res)=>{

    console.log(req.body);
    const {nome, sobrenome, email, foto, login, senha} = req.body;

    livro.create({
        nome, 
        sobrenome,
        email,
        foto,
        login,
        senha
    }).then(
        ()=>{
            res.status(200).json({"MSG": "USUÁRIO INSERIDO COM SUCESSO!"});
        }
    );

});

module.exports = router;