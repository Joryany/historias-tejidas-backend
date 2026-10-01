const mongoose = require("mongoose");
const esquemaItem = new mongoose.Schema ({
    nombre: { type: String, require: true},
    value: {type: String, require: true},
    multiplicador: { type: Number},
    precio: {type: Number},
    defecto: { type: Boolean}
}, {_id: false});

const esquemaGrupo = new mongoose.Schema({
    nombre: { type: String, required: true },
    items: [esquemaItem]
}, { _id: false });

const esquemaProducto = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    categoria: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    imagen: { type: String, required: true },
    alt: { type: String },
    historia: { type: String },
    materiales: { type: String },
    etiqueta: { type: String },
    opciones: [esquemaGrupo]
});

const Producto = mongoose.model("Producto", esquemaProducto);

module.exports = Producto;