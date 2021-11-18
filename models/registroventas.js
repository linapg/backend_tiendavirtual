const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const RegistroventasSchema = new mongoose.Schema({
  factura: String,
  fecha: Date,
  totVentasDia: Number,
  
});
const Registroventas = mongoose.model("registroventas", RegistroventasSchema);
module.exports = Registroventas;