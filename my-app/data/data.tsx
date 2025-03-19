export const users = [
    { id: 1, name: "John_Doe", email: "john@example.com", role: "customer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "admin" }
];

export const products = [
    { id: 101, name: "Wireless Headphones", category: "Electronics", price: 59.99 },
    { id: 102, name: "Gaming Mouse", category: "Electronics", price: 29.99 }
];

export const orders = [
    { id: 5001, userId: 1, products: [{ productId: 101, quantity: 1 }], total: 59.99 }
];
