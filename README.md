# Product Inventory Management API

## 1. Project Description

The **Product Inventory Management API** is a RESTful API built using **Node.js and Express.js**. It helps shop owners manage their products and inventory through HTTP requests.

The API allows users to create, view, update, delete, search, and filter products. It also provides inventory-related information, such as low-stock products and the total value of available inventory.

This project demonstrates important backend development concepts, including REST APIs, CRUD operations, middleware, routing, controllers, and error handling.

## 2. Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Web framework for building the API.
- **JavaScript (ES Modules)** – Used for importing and exporting modules.
- **Postman** – Used for testing API endpoints.
- **JSON** – Used for exchanging data between the client and server.

## 3. Project Structure

```text
product-inventory-api/
│
├── node_modules/
│
├── controllers/
│   └── productController.js
│
├── data/
│   └── products.js
│
├── middleware/
│   └── (custom middleware files)
│
├── routes/
│   └── productRoutes.js
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

### Folder Responsibilities

- **controllers/** – Contains functions that handle incoming requests and send responses.
- **data/** – Stores the product data.
- **routes/** – Defines API endpoints and connects them to controller functions.
- **app.js** – Creates and configures the Express application, registers middleware and routes, and starts the server.

## 4. Product Data Structure

Each product contains the following properties:

| Property | Description |
|---|---|
| id | Unique product identifier |
| name | Product name |
| price | Product price |
| quantity | Available product quantity |
| category | Product category |

Example:

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 800,
  "quantity": 5,
  "category": "Electronics"
}
```

## 5. API Endpoints

The API provides the following endpoints:

### A. Product Management (CRUD)

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| POST | `/products` | Add a new product |
| PUT | `/products/:id` | Update a product |
| PATCH | `/products/:id` | Partially update a product |
| DELETE | `/products/:id` | Delete a product |

### B. Search and Filter Operations

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/products/search?name=laptop` | Search products by name |
| GET | `/products/category/Electronics` | Filter products by category |
| GET | `/products/price/100` | Find products below a specified price |
| GET | `/products/low-stock` | Find products with low stock |

### C. Inventory Calculation

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/products/value` | Calculate the total inventory value |

**Inventory Value Formula:**

```text
Total Inventory Value = Sum of (Product Price × Product Quantity)
```

## 6. Installation and Setup

Follow these steps to run the project locally.

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate into the project folder

```bash
cd product-inventory-api
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the server

```bash
node app.js
```

If the server starts successfully, you should see:

```text
Server is running on port 7000
```

## 7. Testing the API

You can test the API using **Postman**.

The base URL is:

```text
http://localhost:7000
```

Example requests:

**Get all products**

```http
GET http://localhost:7000/products
```

**Get a product by ID**

```http
GET http://localhost:7000/products/1
```

**Add a new product**

```http
POST http://localhost:7000/products
```

Select **Body → raw → JSON** in Postman and provide:

```json
{
  "name": "Keyboard",
  "price": 30,
  "quantity": 10,
  "category": "Electronics"
}
```

**Delete a product**

```http
DELETE http://localhost:7000/products/1
```


## 8. HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | OK – Request successful |
| 201 | Created – Resource successfully created |
| 400 | Bad Request – Invalid request data |
| 404 | Not Found – Requested resource does not exist |
| 500 | Internal Server Error – Unexpected server error |

## 9. Current Storage

The project currently uses a JavaScript array to store product information.

**Note:** Product data is stored in memory. This means newly added, updated, or deleted products will not remain after the server restarts.

A database can be integrated in a future improvement.

## 10. Future Improvements

- Integrate a database such as MySQL or MongoDB.
- Implement user authentication and authorization.
- Add pagination for product lists.
- Improve input validation.
- Add automated API tests.
- Deploy the API online.

## 11. Author

**Befikir Gizachew**

Software Development Student

---

*This project was developed as a learning project to practice backend development using Node.js and Express.js.*
