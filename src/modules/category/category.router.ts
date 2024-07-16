import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { categoryController } from './category.controller'

const router = express.Router()
router.post('/', categoryController.createCategory)
router.get('/', categoryController.getCategory)

router.get('/:id', categoryController.getSingleCategory)
// router.get('/:id', productController.getSingleProduct)


export const categoryRoute = router