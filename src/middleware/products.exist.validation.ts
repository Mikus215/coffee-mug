import ProductModel from '../models/products.model'
import { Request, Response, NextFunction } from 'express'
import { InterfaceProduct } from '../interfaces/products.interfaces'

export const existProductValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body as InterfaceProduct

    try {

        const isAlreadyExist = await ProductModel.findOne({ name }) as InterfaceProduct

        if (isAlreadyExist) return res.status(400).json({ message: "The name of such a product already exists." })

        next();
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
    }
}