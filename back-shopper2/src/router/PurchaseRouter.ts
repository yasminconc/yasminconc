import { Router } from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { PurchaseController } from "../controller/PurchaseController";
import { PurchaseData } from "../data/PurchaseData";
import { TokenManager } from "../services/TokenManager";
import express from "express"
import { ProductsData } from "../data/ProductsData";

export const purchaseBusiness: PurchaseBusiness =  new PurchaseBusiness (
    new PurchaseData(),
    new TokenManager()
)
export const purchaseController: PurchaseController =  new PurchaseController(purchaseBusiness)

export const purchaseRouter: Router = express.Router()

purchaseRouter.get("/purchase", purchaseController.purchase)
