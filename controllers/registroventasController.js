const Registroventas = require("../models/registroventas");
const express = require("express");

function calcRegistroventas(req, res) {
  var newRegistroventas = new Registroventas(req.body);
  newRegistroventas.save((err, result) => {
    res.status(200).send({ message: result });
  });
}

function mostrarRegistroventas(req, res) {
  var idRegistroventas = req.params.id;
  if (!idRegistroventas) {
    var result = Registroventas.find({}).sort("nombre");
  } else {
    var result = Registroventas.find({ _id: idRegistroventas });
  }
  result.exec(function (err, result) {
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

module.exports = {
  calcRegistroventas, 
  mostrarRegistroventas, 
};