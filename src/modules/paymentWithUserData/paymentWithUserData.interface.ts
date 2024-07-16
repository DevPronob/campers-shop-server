import { ObjectId } from "mongoose"

export type TPayment = {
    name: String
    email: String
    address: String
    phone: String
    stripePaymentId: String
}