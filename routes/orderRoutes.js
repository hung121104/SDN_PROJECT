import express from "express";
import { isAdmin, isAuth } from "./../middlewares/authMiddleware.js";
import {
  changeOrderStatusController,
  createOrderController,
  getAllOrdersController,
  getMyOrdersCotroller,
  paymetsController,
  singleOrderDetrailsController,
  cancelOrderController,
  updatePaymentStatusController,
} from "../controllers/orderController.js";

const router = express.Router();

//rroutes
// ============== ORDERS ROUTES ==================

// CREATE ORDERS
router.post("/create", isAuth, createOrderController);

//  GET ALL ORDERS
router.get("/my-orders", isAuth, getMyOrdersCotroller);

//  GET SINGLE ORDER DETAILS
router.get("/my-orders/:id", isAuth, singleOrderDetrailsController);

// acceipt payments
router.post("/payments", isAuth, paymetsController);

// update payment status
router.put("/update-payment-status", isAuth, updatePaymentStatusController);

/// ======== ADMIN PART ============
// get all order
router.get("/admin/get-all-orders", isAuth, isAdmin, getAllOrdersController);

// change order status
router.put("/admin/order/:id", isAuth, isAdmin, changeOrderStatusController);

//cancel order
router.delete("/admin/order/:id", isAuth, isAdmin, cancelOrderController)

// ====================================================================

export default router;
