var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var InventarioSchema=Schema({
    _id:String,
    tendero: { type: mongoose.Types.ObjectId, required: true},
    producto:{ //info must come from class producto
        producto: { type: String, required: true },
        productoId: String,
        },
    info_inventario:{
            fecha: String,
            cantidad: Number,
            minimoStock: Number,
            costoTotal: Number,
            precioVenta: Number,
            entryType: String
            }
    });

//InventarioSchema.index({producto: 1, userId: 1}, {unique: true, background: true});
const Inventario = mongoose.model('inventario',InventarioSchema);
module.exports = Inventario;