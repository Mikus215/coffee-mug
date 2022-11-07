import ProductModel from "../models/products.model";
import { Request, Response, NextFunction } from 'express'
import { InterfaceProduct } from "../interfaces/products.interfaces";
import { HydratedDocument } from "mongoose";

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { name, price } = req.body as InterfaceProduct

    try {
        const newProduct: HydratedDocument<InterfaceProduct> = await ProductModel.create({ name, price })

        res.status(200).json({message: "Created", createdProduct: newProduct})
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
    }
}

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getProductsList: HydratedDocument<InterfaceProduct>[] = await ProductModel.find()

        res.status(200).json(getProductsList)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
    }
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    try {
        const product = await ProductModel.findById(id) as InterfaceProduct
        
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
    }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    
    try {
        const productDeleted = await ProductModel.findByIdAndDelete(id) as InterfaceProduct

        res.status(200).json({message: "Product deleted", productDeleted})
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
    }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { name, price } = req.body as InterfaceProduct

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, {_id: id, name, price }) as InterfaceProduct

        res.status(200).json({message: "Success, the product has been updated", updatedProduct})
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
    }
}