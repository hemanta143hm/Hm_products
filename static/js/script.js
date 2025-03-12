// Fetch and display products dynamically
const products = [
    { name: "Product 1", image: "https://via.placeholder.com/150", price: "₹999", link: "#" },
    { name: "Product 2", image: "https://via.placeholder.com/150", price: "₹1999", link: "#" },
    // Add more products
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" target="_blank">Buy Now</a>
    `;
    productList.appendChild(productCard);
});
