const Producto = require("../models/producto");
const express = require('express');

const findAll = (req, res, next) => {
    console.log('findAll');
    Producto.find().exec((error, resultado) => {
        if (error) {
            resp.status(500).send({
                message: 'Hubo un error al realizar la consulta'
            });
        } else {
            res.status(200).send(resultado);
        }

    });
};

const save = (req, res) => {
    console.log("Guardando productos", req);
    var producto = new Producto(req.body);
    producto.save((err, resultado) => {
        if (err) {
            res.status(500).send({
                message: 'Hubo un error al guardar el producto'
            })
        } else {
            res.status(200).send(resultado);
        }

    });
};

const borrar = (req, resp) => {
    console.log('deleting', req.params.id);
    Producto.findOneAndDelete({_id: req.params.id}, (error, resultado) => {
        if (error) {
            resp.status(500).send({
                message: 'Hubo un error al intentar borrar producto'
            });
        } else {
            resp.status(200).send(resultado);
        }
    });
}

const actualizar = (req, resp) => {
    console.log('actualizar productos');
    Producto.findOneAndUpdate({_id: req.params.id}, req.body, { new: true }, (error, resultado) => {
        if (error) {
            resp.status(500).send({
                message: 'Hubo un error al intentar editar producto'
            });
        } else {
            resp.status(200).send(resultado);
        }
    });
}

const findById = (req, res, next) => {
    console.log('findById');
    Producto.find({_id: req.params.id}).exec((error, resultado) => {
        if (error) {
            resp.status(500).send({
                message: 'Hubo un error al realizar la consulta'
            });
        } else {
            res.status(200).send(resultado);
        }

    });
};

module.exports = {
    findAll,
    save,
    borrar,
    actualizar,
    findById,
}