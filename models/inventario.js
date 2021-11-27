var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var InventarioSchema=Schema({
    fecha: Date,
    producto: { type: String, required: true },
    userId : { type: mongoose.Types.ObjectId, required: true},
    cantidad: Number,
    minimoStock: Number,
    costoTotal: Number,
    precioVenta: Number,
    });

InventarioSchema.index({producto: 1, userId: 1}, {unique: true, background: true});
const Inventario = mongoose.model('inventario',InventarioSchema);
module.exports = Inventario;