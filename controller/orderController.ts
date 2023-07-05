import { Request, Response } from "express";
import { Application } from "express";
import { Order } from "../model/order";

const orderService = require('../service/orderService')

module.exports = function(app: Application){

    app.get('/orders', async (req: Request, res: Response) => {
        let data: Order[]

        try {
            data = await orderService.getOrders()
        } catch (e) {
            console.error(e);
        }

        res.render('list-orders', { orders: data } )
    })

    app.get('/orders/:id', async (req, res) => {
        let data: Order

        try {
            data = await orderService.getOrdersById(req.params.id)
        } catch (e) {
            console.error(e);
        }
        res.render('view-order', { orders: data } )
    })
}