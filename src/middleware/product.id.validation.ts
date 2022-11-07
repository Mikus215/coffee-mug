import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

export const checkValidParamsId = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'There is no such product with this ID' })
    next()
}