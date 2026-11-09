import express from "express";
import productRoutes from "./routes/productRoutes.js";

// Create an Express application
const app = express();

// Define the server port
const PORT = 7000;

// Built-in middleware
app.use(express.json());//register middleware or connect another router to your Express application

app.get("/", (req, res) => {
  res.send("Product Inventory Management API is running!");
});

// Get all products
app.use("/products", productRoutes);
//register middleware or connect another router to your Express application
//	Can apply to different HTTP methods


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});