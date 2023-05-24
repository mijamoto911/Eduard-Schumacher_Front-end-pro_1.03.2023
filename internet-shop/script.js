const categoryList = document.getElementById('category-list');
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const orderForm = document.getElementById('order-form');
const orderDetails = document.getElementById('order-details');

const data = {
    electronics: [
        { id: 1, name: 'Smartphone', price: 1000 },
        { id: 2, name: 'Laptop', price: 1500 },
    ],
    clothing: [
        { id: 3, name: 'T-shirt', price: 20 },
        { id: 4, name: 'Jeans', price: 50 },
    ],
    books: [
        { id: 5, name: 'Novel', price: 10 },
        { id: 6, name: 'Poetry', price: 15 },
    ],
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
    buyButton.addEventListener('click', () => showOrderForm(product));


    productDetails.appendChild(name);
    productDetails.appendChild(price);
    productDetails.appendChild(buyButton);
}

function showOrderForm(product) {
    orderForm.reset();
    document.getElementById('quantity').value = 1;

    productDetails.innerHTML = '';
    orderForm.style.display = 'block';
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitOrder(product);
    });
}

function submitOrder(product) {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const delivery = document.getElementById('delivery').value;
    const payment = document.getElementById('payment').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    if (name && city && delivery && payment && quantity) {
        const order = {
            product: product,
            name: name,
            city: city,
            delivery: delivery,
            payment: payment,
            quantity: quantity,
            comment: comment,
        };

        orderForm.reset();
        orderForm.style.display = 'none';

        showOrderDetails(order);
    } else {
        console.log('Please fill in all mandatory fields of the form!');
    }
}

function showOrderDetails(order) {
    orderDetails.innerHTML = '';

    const productName = document.createElement('h3');
    productName.textContent = `Product name: ${order.product.name}`;

    const customerName = document.createElement('p');
    customerName.textContent = `Name of the buyer: ${order.name}`;

    const city = document.createElement('p');
    city.textContent = `City: ${order.city}`;

    const delivery = document.createElement('p');
    delivery.textContent = `New post warehouse: ${order.delivery}`;

    const payment = document.createElement('p');
    payment.textContent = `Payment method: ${order.payment}`;

    const quantity = document.createElement('p');
    quantity.textContent = `Quantity: ${order.quantity}`;

    const comment = document.createElement('p');
    comment.textContent = `Comment: ${order.comment}`;

    orderDetails.appendChild(productName);
    orderDetails.appendChild(customerName);
    orderDetails.appendChild(city);
    orderDetails.appendChild(delivery);
    orderDetails.appendChild(payment);
    orderDetails.appendChild(quantity);
    orderDetails.appendChild(comment);
}

categoryList.addEventListener('click', (event) => {
    const category = event.target.getAttribute('data-category');
    if (category) {
        showProducts(category);
    }
});