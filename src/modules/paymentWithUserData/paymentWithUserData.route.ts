import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { paymentValidation } from './paymentWithUserData.validation'
import { paymentController } from './paymentWithUserData.controller'


const router = express.Router()
router.post('/createPayment', paymentController.createPayment)
router.post('/', validateRequest(paymentValidation.paymentValidationSchema), paymentController.createPaymentWithUser)

export const paymentRoute = router