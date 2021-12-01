const Factura = require("../models/factura");
const express = require('express');

const createFactura = (req, res) => {
  console.log("Guardando productos", req);
  var factura = new Factura(req.body);
  factura.save((err, resultado) => {
      if (err) {
          res.status(500).send({
              message: 'Hubo un error al guardar la factura'
          })
      } else {
          res.status(200).send(resultado);
      }
  });
};

const listAllFactura = (req, res, next) => {
  console.log('findAll');
  Factura.find().exec((error, resultado) => {
      if (error) {
          resp.status(500).send({
              message: 'Hubo un error al realizar la consulta'
          });
      } else {
          res.status(200).send(resultado);
      }
  });
};

function listFactura(req, res) {
  var idFactura = req.params.id;
  Factura.findById(idFactura).exec((err, result) => {
    if (err) {
      res.status(500).send({ message: "Error al momento de ejecutar la solicitud" });
    } else {
      if (!result) {
        res.status(404).send({ message: "El registro a buscar no se encuentra disponible" });
      } else {
        res.status(200).send({ result });
      }
    }
  });
}

const updateFactura = (req, resp) => {
  console.log('Actualizar factura');
  Factura.findOneAndUpdate({_id: req.params.id}, req.body, { new: true }, (error, resultado) => {
      if (error) {
          resp.status(500).send({
              message: 'Hubo un error al intentar editar la factura'
          });
      } else {
          resp.status(200).send(resultado);
      }
  });
}

const deleteFactura = (req, resp) => {
  console.log('deleting', req.params.id);
  Factura.findOneAndDelete({_id: req.params.id}, (error, resultado) => {
      if (error) {
          resp.status(500).send({
              message: 'Hubo un error al intentar borrar la factura'
          });
      } else {
          resp.status(200).send(resultado);
      }
  });
}

module.exports = {
  createFactura,
  listAllFactura,
  listFactura,
  updateFactura,
  deleteFactura,
};