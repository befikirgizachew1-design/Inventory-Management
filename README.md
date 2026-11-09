# Product Inventory Management API

## Project Description

The **Product Inventory Management API** is a RESTful API built using Node.js and Express.js. It helps shop owners manage their product inventory by performing different operations such as adding, viewing, updating, deleting, searching, and filtering products.

The API also provides functionality to identify low-stock products and calculate the total value of the inventory.

## Technologies Used

- Node.js
- Express.js
- JavaScript (ES Modules)
- Postman (for API testing)

## Project Structure

```text
product-inventory-api/
│
├── package.json
├── app.js
├── README.md
│
├── routes/
│   └── productRoutes.js
│
├── controllers/
│   └── productController.js
│
└── data/
    └── products.js
```

## Features

This API supports the following operations:

1. **View All Products** – Retrieve all available products.
2. **View a Single Product** – Find a product using its ID.
3. **Add a Product** – Add a new product to the inventory.
4. **Update a Product** – Update all information about an existing product.
5. **Partially Update a Product** – Update selected product information.
6. **Delete a Product** – Remove a product from the inventory.
7. **Search Products** – Search for products by name.
8. **Filter by Category** – Find products belonging to a specific category.
9. **Filter by Price** – Find products below a specified price.
10. **Check Low Stock** – Identify products with a quantity below 5.
11. **Calculate Inventory Value** – Calculate the total value of all products in the inventory.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Navigate to the Project Folder

```bash
cd product-inventory-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
node app.js
```

The server will run on:

```text
http://localhost:7000
```

You should see:

```text
Server is running on port 7000
```

## API Endpoints

Base URL:

```text
http://localhost:7000
```

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check whether the API is running |
| GET | `/products`
