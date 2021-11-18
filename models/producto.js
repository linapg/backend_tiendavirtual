const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const ProductoSchema = new mongoose.Schema({ nombreProducto: String, categoria: String, proveedor: String, precioUnitario: Number, precio: Number, fechaVencimiento: Date, unidad: Number, usuario: String });
const Producto = mongoose.model('producto', ProductoSchema);
module.exports = Producto;