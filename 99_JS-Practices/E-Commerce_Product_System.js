// Simple product catalog and cart system
const products = [
    { id: 1, name: "Wireless Mouse", price: 25, category: "Electronics", inStock: true },
    { id: 2, name: "USB Keyboard", price: 45, category: "Electronics", inStock: true },
    { id: 3, name: "Laptop Stand", price: 35, category: "Accessories", inStock: true },
    { id: 4, name: "HD Webcam", price: 80, category: "Electronics", inStock: false },
    { id: 5, name: "Desk Lamp", price: 30, category: "Home", inStock: true }
];

let cart = [];

// 1. Display all products
function displayProducts() {
    console.log("=== PRODUCT CATALOG ===");
    products.forEach(product => {
        const status = product.inStock ? "✓ In Stock" : "✗ Out of Stock";
        console.log(`${product.id}. ${product.name} - $${product.price} (${product.category}) - ${status}`);
    });
}

// 2. Filter by category
function filterByCategory(category) {
    const filtered = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
    );
    console.log(`\n${category.toUpperCase()} Products:`);
    filtered.forEach(p => console.log(`- ${p.name}: $${p.price}`));
    return filtered;
}

// 3. Add to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.log("Product not found!");
        return;
    }
    
    if (!product.inStock) {
        console.log(`${product.name} is out of stock!`);
        return;
    }
    
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }
    
    console.log(`Added ${quantity} ${product.name}(s) to cart`);
}

// 4. Remove from cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    
    if (index !== -1) {
        const removed = cart.splice(index, 1)[0];
        console.log(`Removed ${removed.name} from cart`);
    } else {
        console.log("Item not in cart!");
    }
}

// 5. View cart
function viewCart() {
    if (cart.length === 0) {
        console.log("Your cart is empty!");
        return;
    }
    
    console.log("\n=== SHOPPING CART ===");
    cart.forEach(item => {
        console.log(`${item.name} x ${item.quantity} = $${item.price * item.quantity}`);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Total: $${total}`);
}

// 6. Search products
function searchProducts(keyword) {
    const results = products.filter(product => 
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.category.toLowerCase().includes(keyword.toLowerCase())
    );
    
    console.log(`\nSearch results for "${keyword}":`);
    if (results.length === 0) {
        console.log("No products found");
    } else {
        results.forEach(p => console.log(`- ${p.name}: $${p.price}`));
    }
}

// Test the system
displayProducts();
addToCart(1, 2);  // Add 2 Wireless Mice
addToCart(3, 1);  // Add 1 Laptop Stand
addToCart(4, 1);  // Try to add out-of-stock item
viewCart();
filterByCategory("Electronics");
searchProducts("mouse");