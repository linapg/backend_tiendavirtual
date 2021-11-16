const mongoose = require('mongoose');
mongoose
    .connect("mongodb://localhost:27017/tiendavirtual-db", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log('La conexion a la base de datos fue correcta...')
        }
    });