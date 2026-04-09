// Write your code here

const products = ["Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct() {
  console.log(products[0])
}

function addProduct (new_product) {
  products.push(new_product)  
  return products
}

function updateProductName (position, new_name) {
  products[position] = new_name
  return products
}

function removeLastProduct () {
  products.pop()
  return products
}

console.log(logFirstProduct())

console.log(addProduct("Fridge"))

console.log(updateProductName(4, "Keyboard"))

console.log(removeLastProduct())

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
