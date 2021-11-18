const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const UsuarioSchema = new mongoose.Schema({ 
    nombreUsuario: String, 
    email: String, 
    contraseña: String, 
    tipoTienda: String, 
    identificacion: String});
const Usuario = mongoose.model('usuario', UsuarioSchema);
module.exports = Usuario;