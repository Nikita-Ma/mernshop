import jwt from 'jsonwebtoken'
import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = AsyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split('  ')[1]
            const deccoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(deccoded.id).select('-password')

            next()
        } catch (e) {
            console.error(e)
            res.status(401)
            throw new Error('Not authoruzed')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized no token')
    }
    next()
})
export {protect}