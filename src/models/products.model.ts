import mongoose,{ Document, Schema } from 'mongoose';
import { InterfaceProduct } from '../interfaces/products.interfaces'

interface InterfaceProductModel extends InterfaceProduct, Document {}

const ProductSchema: Schema = new Schema<InterfaceProduct>({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
},{
    timestamps: true
})

export default mongoose.model<InterfaceProductModel>('Product', ProductSchema)