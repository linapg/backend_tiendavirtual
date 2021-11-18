var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
 
var productoController = require('../controllers/ProductoController');
var facturaController = require('../controllers/FacturaController');

//Rutas de producto
router.get('/productos', productoController.findAll);
router.post('/productos', productoController.save);
router.delete('/productos/:id', productoController.borrar);
router.put('/productos/:id', productoController.actualizar  );

//Rutas de factura
router.post('/crearfactura', facturaController.createFactura);
router.get('/consultarfacturas', facturaController.listAllFactura);
router.get('/consultarfactura/:id', facturaController.listFactura);
router.put('/actualizarfactura/:id', facturaController.updateFactura);
router.delete('/eliminarfactura/:id', facturaController.deleteFactura);

module.exports = router;
