import { Router } from "express";
import { productsController } from "./controllers/productsController";

export const router = Router()

router.get("/products", productsController.all)
router.get("/products/:id", productsController.find)
router.post("/products", productsController.create)
router.put("/products/:id", productsController.update)
router.delete("/products/:id", productsController.delete)