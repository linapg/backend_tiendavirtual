const Producto = require("../models/producto");
const express = require('express');

const findAll = (req, res, next) => {
    console.log('findAll');
    Producto.find({usuario:'juanEsteban'}).exec((error, resultado) => {
        if(error) {
            resp.status(500).send ({
                message: 'Hubo un error al realizar la consulta'
            });
        } else {
            res.status(200).send(resultado);
        }

    });
};

module.exports = {
    findAll
}