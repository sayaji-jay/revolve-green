# Product Database

This folder contains all product data in JSON format for easy management and updates.

## Structure

```
database/
└── products/
    ├── mlp-products.json          # Multi-Layer Paper products
    ├── cloth-products.json        # Cloth and fabric products
    ├── coconut-products.json      # Coconut shell products
    ├── special-products.json      # E-waste and magazine products
    ├── sajja-decor-products.json  # Event decor products
    └── index.js                   # Export file with helper functions
```

## Usage

### Import all products
```javascript
import {
  mlpProducts,
  clothProducts,
  coconutProducts,
  specialProducts,
  sajjaDecorProducts
} from '@/database/products';
```

### Use helper functions
```javascript
import {
  getAllProducts,
  getProductsByCategory,
  getProductById
} from '@/database/products';

// Get all products
const allProducts = getAllProducts();

// Get products by category
const mlpItems = getProductsByCategory('mlp');

// Get specific product by ID
const product = getProductById('mlp-001');
```

## Updating Products

To update product data:
1. Open the relevant JSON file in `database/products/`
2. Edit the product information
3. Save the file
4. Changes will automatically reflect in your application

## Product Structure

Each product has the following structure:
```json
{
  "id": "unique-id",
  "name": "Product Name",
  "price": "₹XXX",
  "material": "Material type",
  "description": "Product description",
  // Additional fields like diameter, height, width, etc.
}
```
