const Usuario = require("../models/usuario");
const express = require('express');


function createUser(req,res){
    var miUsuario= new Usuario(req.body);
    miUsuario.save((err,result)=>{
        res.status(200).send({message:result});
    });
}

const findUser = (req, res, next) => {
    console.log('findUser');
    Usuario.find().exec((error, resultado) => {
        if (error) {
            resp.status(500).send({
                message: 'Hubo un error al realizar la consulta'
            });
        } else {
            res.status(200).send(resultado);
        }

    });
};

const deleteUser = (req, resp) => {
    console.log('deleting', req.params.id);
    Usuario.findOneAndDelete({_id: req.params.id}, (error, resultado) => {
        if (error) {
            resp.status(500).send({
                message: 'Hubo un error al intentar borrar producto'
            });
        } else {
            resp.status(200).send(resultado);
        }
    });
}

const updateUser = (req, resp) => {
    console.log('actualizar productos');
    Usuario.findOneAndUpdate({_id: req.params.id}, req.body, { new: true }, (error, resultado) => {
        if (error) {
            resp.status(500).send({
                message: 'Hubo un error al intentar editar producto'
            });
        } else {
            resp.status(200).send(resultado);
        }
    });
}

module.exports = {
    findUser,
    createUser,
    deleteUser,
    updateUser
};