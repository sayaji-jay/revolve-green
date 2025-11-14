// Central export file for all product data
import mlpProducts from './mlp-products.json';
import clothProducts from './cloth-products.json';
import coconutProducts from './coconut-products.json';
import specialProducts from './special-products.json';
import sajjaDecorProducts from './sajja-decor-products.json';

export {
  mlpProducts,
  clothProducts,
  coconutProducts,
  specialProducts,
  sajjaDecorProducts
};

// Helper function to get all products
export const getAllProducts = () => {
  return [
    ...mlpProducts.products,
    ...clothProducts.products,
    ...coconutProducts.products,
    ...specialProducts.products,
    ...sajjaDecorProducts.products
  ];
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  const categoryMap = {
    'mlp': mlpProducts,
    'cloth': clothProducts,
    'coconut': coconutProducts,
    'special': specialProducts,
    'sajja-decor': sajjaDecorProducts
  };

  return categoryMap[category]?.products || [];
};

// Helper function to get product by ID
export const getProductById = (id) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === id);
};
