import express from 'express';
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js'
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes";

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Api running')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)


app.use(errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on ${PORT} ^^`.yellow.bold))