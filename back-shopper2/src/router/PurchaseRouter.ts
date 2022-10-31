import express from "express"
import { Router } from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { PurchaseController } from "../controller/PurchaseController";
import { PurchaseData } from "../data/PurchaseData";
import { TokenManager } from "../services/TokenManager";

export const purchaseRouter = express.Router()

export const purchaseBusiness: PurchaseBusiness =  new PurchaseBusiness (
    new PurchaseData(),
    new TokenManager()
)

export const purchaseController: PurchaseController =  new PurchaseController(purchaseBusiness)

purchaseRouter.get("/purchase", purchaseController.purchase)
