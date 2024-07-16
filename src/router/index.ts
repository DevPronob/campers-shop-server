import { Router } from "express";
import { productRoute } from "../modules/products/products.route";
import { categoryRoute } from "../modules/category/category.router";
import { cartRoute } from "../modules/cart/cart.router";
import { paymentRoute } from "../modules/paymentWithUserData/paymentWithUserData.route";

const router = Router()
const modeuleRoutes = [
    {
        path: '/products',
        route: productRoute
    },
    {
        path: '/category',
        route: categoryRoute
    },
    {
        path: '/cart',
        route: cartRoute
    },
    {
        path: '/payment',
        route: paymentRoute
    }
]

modeuleRoutes.forEach((ele) => router.use(ele.path, ele.route))
export default router

