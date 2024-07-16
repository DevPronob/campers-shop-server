import httpStatus from "http-status";
import catchAsync from "../../utilitis/catchAsync";
import sendResponse from "../../utilitis/sendResponse";
import { paymentService } from "./paymentWithUserData.service";
import { Request, Response } from "express";


const createPayment = catchAsync(async (req: Request, res: Response) => {
    const result = await paymentService.setPayment(req.body);
    return sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'payment successfull',
        data: result
    })
})


const createPaymentWithUser = catchAsync(async (req: Request, res: Response) => {
    const result = await paymentService.setUserPayment(req.body);
    return sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'payment successfull with user',
        data: result
    })
})


export const paymentController = {
    createPayment,
    createPaymentWithUser
}