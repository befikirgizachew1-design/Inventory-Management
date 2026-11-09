import express from "express";

import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  patchProduct,
  deleteProduct,
  searchProducts,
  filterByCategory,
  filterByPrice,
  getLowStockProducts,
  getInventoryValue
} from "../controllers/productController.js";

// Create a router
const router = express.Router();//It creates a separate router object.

// Search products
router.get("/search", searchProducts);

// Filter products by category
router.get("/category/:category", filterByCategory);

// Find products below a price
router.get("/price/:price", filterByPrice);

// Find low-stock products
router.get("/low-stock", getLowStockProducts);

// Calculate total inventory value
router.get("/value", getInventoryValue);

// Get all products
router.get("/", getAllProducts);

// Get a single product
router.get("/:id", getProductById);


// Add a new product
router.post("/", addProduct);

// Update a product
router.put("/:id", updateProduct);

// Partially update a product
router.patch("/:id", patchProduct);

// Delete a product
router.delete("/:id", deleteProduct);

export default router;
