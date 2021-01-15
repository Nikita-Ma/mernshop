import asyncHandler from 'express-async-handler'
import Product from "../models/orderModel.js";
import Order from "../models/orderModel";

// * @desc Fetch all orders
// * @route POST /api/orders
// * @access Public

const getOrder = asyncHandler(async (req, res) => {
    const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice} = req.body
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order')

    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
})
export {getOrder}