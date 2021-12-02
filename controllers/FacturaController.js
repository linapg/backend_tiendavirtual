const Factura = require("../models/factura");
const express = require('express');

const createFactura = (req, res) => {
  console.log("Guardando facturas", req);
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
  console.log('Consultando facturas');
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

const listFactura = (req, res, next) => {
  console.log('Buscando factura por ID');
  Factura.find({_id: req.params.id}).exec((error, resultado) => {
      if (error) {
          resp.status(500).send({
              message: 'Hubo un error al realizar la consulta'
          });
      } else {
          res.status(200).send(resultado);
      }

  });
};

const updateFactura = (req, resp) => {
  console.log('Actualizar factura');
  Factura.findOneAndUpdate({_id: req.params.id}, req.body, { new: true }, (error, resultado) => {
      if (error) {
          resp.status(500).send({
              message: 'Hubo un error al intentar actualizar la factura'
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