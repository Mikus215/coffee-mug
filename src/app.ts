import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productsRouter from './routes/products.routes'

dotenv.config();

const app = express()

app.use(express.json())

app.get('/', (req, res, next) => {
    res.send("Task ...")
})

app.use("/products", productsRouter)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || '',)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));