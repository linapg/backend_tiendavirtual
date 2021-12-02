const Inventario = require("../models/inventario");
const express = require('express');

//PRUEBA
//function prueba(req,res){
//    res.status(200).send({
//    message: 'probando una acción............'
//    });
//    }
    
//BUSCAR
function findAll(req, res, next) {
    console.log('findAll');
    Inventario.find({}).exec((error, resultado) => {
        if (error) {
            res.status(500).send({
                message: 'Hubo un error al realizar la consulta del inventario'
            });
        } else {
            res.status(200).send(resultado);
        }
    });
}

//CREAR
function saveInventario(req,res){
    console.log('saveInventario',req.body)
    var newInventario = req.body; //Si el userId no está en el body, hay que pasarlo manualmente.
    var miInventario= new Inventario(newInventario);
    console.log('miInventario',miInventario)
    miInventario.save((err,result)=>{
        if(err) {
            res.status(500).send({"error":err});    
        } else {
            res.status(200).send({message:result});
        }
    });
    }


// ACTUALIZAR
//function updateInventario(req, resp) {
//    console.log('actualizar inventario');
//    Inventario.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, resultado) => {
//        if (error) {
//            resp.status(500).send({
//                message: 'Hubo un error al intentar editar el inventario'
//            });
//        } else {
//           resp.status(200).send(resultado);
//        }
//    });
//}

//BORRAR
//function deleteInventario(req, resp) {
//    console.log('deleting', req.params.id);
//    Inventario.findOneAndDelete({ _id: req.params.id }, (error, resultado) => {
//        if (error) {
//            resp.status(500).send({
//                message: 'Hubo un error al intentar borrar el inventario'
//            });
//        } else {
//            resp.status(200).send(resultado);
//        }
//    });
//}

module.exports={
    //prueba, 
    findAll,
    saveInventario, 
    //updateInventario, 
    //deleteInventario
}