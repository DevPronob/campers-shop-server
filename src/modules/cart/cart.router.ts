import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { cartController } from './cart.controller'
import { cartValidation } from './cart.validation'


const router = express.Router()
router.post('/', validateRequest(cartValidation.cartValidationSchema), cartController.createCart)
router.get('/', cartController.getCart)
router.put('/:id', cartController.updateCart)
router.delete('/:id', cartController.deleteCart)
export const cartRoute = router