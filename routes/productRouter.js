const { ProductModel } = require("../models/product.model")
const { auth } = require("../middleware/auth.middleware")
const express = require('express');

const productRouter = express.Router()

productRouter.post("/add",  async (req, res) => {
    try {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(201).send({ "msg": "Product added", "Product": req.body })
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

productRouter.get("/products", async (req, res) => {
    try {
        const product = await ProductModel.find()
        res.status(200).send(product)
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

productRouter.get("/products/:id", async (req, res) => {
    const { id } = req.params
    try {
        const product = await ProductModel.find({ _id: id })
        res.status(200).send(product)
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

productRouter.patch("/products/:id",  async (req, res) => {
    const { id } = req.params
    try {

        await ProductModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(204).send({ "msg": "Product updated" })

    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

productRouter.delete("/products/:id",  async (req, res) => {
    const { id } = req.params
    try {
        await ProductModel.findByIdAndDelete({ _id: id })
        res.status(202).send({ "msg": "Product deleted" })

    } catch (err) {
        res.status(400).send({ "error": err })

    }
})


module.exports = {
    productRouter
}
