var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  
var productoController = require('../controllers/ProductoController');

router.get('/productos', productoController.findAll);
router.post('/productos', productoController.save);
router.delete('/productos/:id', productoController.borrar);
router.put('/productos/:id', productoController.actualizar  );
module.exports = router;
