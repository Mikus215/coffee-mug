import { Router } from 'express'
import { createProduct, getProducts, getProduct, deleteProduct, updateProduct } from '../controllers/products.controller'
import { existProductValidation } from '../middleware/products.exist.validation'
import { checkValidParamsId } from '../middleware/product.id.validation'
import { createUpdateProductValidation } from '../middleware/products.create-update.validation'

const router = Router()

router.post("/product/add", existProductValidation, createUpdateProductValidation, createProduct)
router.get("/list", getProducts)
router.get("/product/details/:id", checkValidParamsId, getProduct)
router.delete("/product/delete/:id", checkValidParamsId, deleteProduct)
router.put("/product/update/:id", checkValidParamsId, createUpdateProductValidation, updateProduct)

export default router