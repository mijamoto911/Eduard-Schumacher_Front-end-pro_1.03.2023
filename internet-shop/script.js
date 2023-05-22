const categoryList = document.getElementById('category-list');
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');

const data = {
    electronics: [{
        id: 1,
        name: 'Smartphone',
        price: 1000
    }, {
        id: 2,
        name: 'Laptop',
        price: 1500
    }, ],
    clothing: [{
        id: 3,
        name: 'T-shirt',
        price: 20
    }, {
        id: 4,
        name: 'Jeans',
        price: 50
    }, ],
    books: [{
        id: 5,
        name: 'Novel',
        price: 10
    }, {
        id: 6,
        name: 'Poetry',
        price: 15
    }, ],
};


function showProducts(category) {
    productList.innerHTML = '';
    const products = data[category];
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;
        li.addEventListener('click', () => showProductDetails(product));
        productList.appendChild(li);
    });
}

function showProductDetails(product) {
    productDetails.innerHTML = '';
    const name = document.createElement('h3');

    name.textContent = product.name;
    const price = document.createElement('p');
    price.textContent = `Price: $${product.price}`;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.addEventListener('click', () => buyProduct(product));

    productDetails.appendChild(name);
    productDetails.appendChild(price);
    productDetails.appendChild(buyButton);
}

function buyProduct(product) {
    alert(`Goods "${product.name}" bought!`);
    productDetails.innerHTML = '';
    showProducts();
}

categoryList.addEventListener('click', (event) => {
    const selectedCategory = event.target.getAttribute('data-category');
    if (selectedCategory) {
        showProducts(selectedCategory);
    }
});

showProducts();