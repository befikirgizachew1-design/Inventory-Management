import products from "../data/products.js";

// Get all products
export function getAllProducts(req, res) {
  res.json(products);
}
// Get a single product by ID
export function getProductById(req, res) {
  const id = Number(req.params.id); //gets the value from the URL and Number() converts a string into the number

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
}

// Add a new product
export function addProduct(req, res) {
  console.log("Received product:", req.body);

  const { name, price, quantity, category } = req.body; //extracts from req.body

  // Check required fields
  if (!name || price === undefined || quantity === undefined || !category) {
    return res.status(400).json({
      message: "Please provide all product details",
    });
  }

  // Create a new product
  const newProduct = {
    id:
      products.length > 0
        ? Math.max(...products.map((product) => product.id)) + 1 /*
          function getProductId(product) {
    return product.id;
} 
          product.id: accesses the ID of that product.
          */
        : 1, //condition ? valueIfTrue : valueIfFalse;
    name,
    price: Number(price),
    quantity: Number(quantity),
    category
  };

  // Add product to the array
  products.push(newProduct);

  // Send response
  res.status(201).json({
    message: "Product added successfully",
    product: newProduct /*   "products": [
        {
            "id": 1,
            "name": "Laptop",
            "price": 500
        },*/
  });
}

// Update an existing product
export function updateProduct(req, res) {
  const id = Number(req.params.id);

  const { name, price, quantity, category } = req.body;

  // Check whether all fields are provided
  if (!name || price === undefined || quantity === undefined || !category) {
    return res.status(400).json({
      message: "Please provide all product details",
    });
  }

  // Find the product index
  const productIndex = products.findIndex((product) => product.id === id);
  /*const productIndex = products.findIndex(
    (product) => product.id === id
);*/
  // Check whether the product exists
  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  // Update the product
  products[productIndex] = {
    id,
    name,
    price: Number(price),
    quantity: Number(quantity),
    category,
  };

  // Send the updated product
  res.status(200).json({
    message: "Product updated successfully",
    product: products[productIndex],
  });
}

// Partially update a product
export function patchProduct(req, res) {
  const id = Number(req.params.id);

  const { name, price, quantity, category } = req.body;

  // Find the product
  const productIndex = products.findIndex((product) => product.id === id);

  // Check whether the product exists
  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  // Check whether the request body is empty
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Please provide at least one field to update",
    });
  }

  // Update only the provided fields
  if (name !== undefined) {
    products[productIndex].name = name;
  }

  if (price !== undefined) {
    products[productIndex].price = Number(price);
  }

  if (quantity !== undefined) {
    products[productIndex].quantity = Number(quantity);
  }

  if (category !== undefined) {
    products[productIndex].category = category;
  }

  res.status(200).json({
    message: "Product partially updated successfully",
    product: products[productIndex],
  });
}

// Delete a product
export function deleteProduct(req, res) {
  const id = Number(req.params.id);

  // Find the product index
  const productIndex = products.findIndex((product) => product.id === id);

  // Check whether the product exists
  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  // Remove the product
  const deletedProduct = products.splice(
    productIndex,
    1,
  ); /*(array position where removal starts ,means remove one element)*/

  // Send response
  res.status(200).json({
    message: "Product deleted successfully",
    product: deletedProduct[0],
  });
}

// Search products by name
export function searchProducts(req, res) {
  const name = req.query.name; //gets the search value from the URL query string.

  // Check whether the search name was provided
  if (!name || !name.trim()) {
    return res.status(400).json({
      message: "Please provide a product name to search",
    });
  }

  // Search products
  const result = products.filter((product) =>
    product.name.toLowerCase().includes(name.trim().toLowerCase()),
  );

  // Check whether products were found
  if (result.length === 0) {
    return res.status(404).json({
      message: "No matching products found",
    });
  }

  res.status(200).json(result);
}

// Filter products by category
export function filterByCategory(req, res) {
  const category = req.params.category;

  const result = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );

  if (result.length === 0) {
    return res.status(404).json({
      message: "No products found in this category",
    });
  }

  res.status(200).json(result);
}

// Find products below a specified price
export function filterByPrice(req, res) {
  const maxPrice = Number(req.params.price);

  if (!Number.isFinite(maxPrice) || maxPrice <= 0) {
    return res.status(400).json({
      message: "Please provide a valid price",
    });
  }

  const result = products.filter((product) => product.price < maxPrice);

  if (result.length === 0) {
    return res.status(404).json({
      message: "No products found below this price",
    });
  }

  res.status(200).json(result);
}

// Find low-stock products
export function getLowStockProducts(req, res) {
  const result = products.filter((product) => product.quantity < 5);

  if (result.length === 0) {
    return res.status(404).json({
      message: "No low-stock products found",
    });
  }

  res.status(200).json(result);
}

// Calculate total inventory value
export function getInventoryValue(req, res) {
  const totalValue = products.reduce(
    //combines them into one final value.
    (total, product) => total + product.price * product.quantity,
    0, //start calculating with total = 0
  );

  res.status(200).json({
    totalInventoryValue: totalValue,
  });
}
