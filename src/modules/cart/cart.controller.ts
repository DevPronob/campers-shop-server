import { Request, Response } from "express";
import catchAsync from "../../utilitis/catchAsync";
import sendResponse from "../../utilitis/sendResponse";
import { cartService } from "./cart.service";
import httpStatus from "http-status";
const createCart = catchAsync(async (req: Request, res: Response) => {
    const result = await cartService.createCartIntoDb(req.body);
    return sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Cart created successfully',
        data: result
    })
})
const getCart = catchAsync(async (req: Request, res: Response) => {
    const result = await cartService.getCartFrom();
    return sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Cart Rectrive successfully',
        data: result
    })
})

const updateCart = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await cartService.updateCartIntoDb(id, req.body);
    return sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Cart updated successfully',
        data: result
    })
})

const deleteCart = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await cartService.deleteCartFromDb(id);
    return sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Cart deleted successfully',
        data: result
    })
})
export const cartController = {
    createCart,
    getCart,
    updateCart,
    deleteCart
}
