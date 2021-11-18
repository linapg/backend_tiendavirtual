const Factura = require("../models/factura");
const express = require("express");

function createFactura(req, res) {
  var newFactura = new Factura(req.body);
  newFactura.save((err, result) => {
    res.status(200).send({ message: result });
  });
}

function listAllFactura(req, res) {
  var idFactura = req.params.id;
  if (!idFactura) {
    var result = Factura.find({}).sort("nombre");
  } else {
    var result = Factura.find({ _id: idFactura });
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

function updateFactura(req, res) {
  var idFactura = mongoose.Types.ObjectId(req.query.productId);
  Factura.findOneAndUpdate({ _id: idFactura }, req.body, { new: true }, function (err, Factura) {
      if (err) 
        res.send(err);
      res.json(Factura);
    }
  );
}

function deleteFactura(req, res) {
  var idFactura = req.params.id;
  Factura.findByIdAndRemove(id, function (err, factura) {
    if (err) {
      return res.json(500, {
        message: "No hemos encontrado la factura",
      });
    }
    return res.json(factura); 
  });
}

module.exports = {
  createFactura,
  listAllFactura,
  listFactura,
  updateFactura,
  deleteFactura,
};