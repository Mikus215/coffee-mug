import { Request, Response, NextFunction } from 'express'
import { InterfaceProduct } from '../interfaces/products.interfaces'

export const createUpdateProductValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { name, price } = req.body as InterfaceProduct

    try {

        if(name.length > 100) return res.status(400).json({ message: "The maximum number of characters is 100." })
        if(!name) return res.status(400).json({ message: "The name must not be empty." })
        if(!price) return res.status(400).json({ message: "The price must not be empty." })

        next();
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
    }
}