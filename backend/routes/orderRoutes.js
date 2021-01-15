import express from 'express'

const router = express.Router()

import {protect} from "../middleware/authMiddleware";
import {getOrder} from "../controllers/orderController";


router.route('/').get(protect, getOrder)

export default router