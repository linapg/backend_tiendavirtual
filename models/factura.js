const mongoose = require("mongoose");

const FacturaSchema = new mongoose.Schema({
    tendero: String,
    codigoFactura: String,
    metodo_pago: String,
    producto: String,
    cantidad_vendida: Number,
    total_venta: Number
},{ timestamps: true });

const Factura = mongoose.model("factura", FacturaSchema);
module.exports = Factura;