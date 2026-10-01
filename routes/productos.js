const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto.js");

// GET /api/productos 
router.get("/", async function(req, res) {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/productos/:id
router.get("/:id", async function(req, res) {
    try {
        const idBuscado = req.params.id;
        const producto = await Producto.findOne({ id: idBuscado });

        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;