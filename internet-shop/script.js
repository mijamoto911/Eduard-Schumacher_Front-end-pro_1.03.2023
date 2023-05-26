const categories = {
    books: [{
        name: 'Роман',
        price: 10
    }, {
        name: 'Поезія',
        price: 15

    }],
    electronics: [{
        name: 'Смартфон',
        price: 500
    }, {
        name: 'Ноутбук',
        price: 1000

    }],
    clothing: [{
        name: 'Футболка',
        price: 20
    }, {
        name: 'Джинси',
        price: 30

    }]
};

const categoryList = document.getElementById('category-list');
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const orderForm = document.getElementById('order-form');
const orderFormElement = document.getElementById('order-form-element');
const orderDetails = document.getElementById('order-details');
const myOrdersButton = document.getElementById('my-orders-button');

let currentCategory = '';


function showProducts(category) {
    currentCategory = category;
    const products = categories[category];

    productList.innerHTML = '';
    productDetails.innerHTML = '';

    for (const product of products) {
        const li = document.createElement('li');
        li.innerText = `${product.name} - ${product.price} $`;
        li.addEventListener('click', () => {
            showProductDetails(product);
        });
        productList.appendChild(li);
    }
}


function showProductDetails(product) {
    productDetails.innerHTML = `
<h2>${product.name}</h2>
<p>Price: ${product.price} грн</p>
<button id="buy-button">Buy</button>
`;

    const buyButton = document.getElementById('buy-button');
    buyButton.addEventListener('click', () => {
        showOrderForm(product);
    });
}


function showOrderForm(product) {
    productDetails.innerHTML = '';
    orderForm.style.display = 'block';

    orderFormElement.addEventListener('submit', (event) => {
        event.preventDefault();
        submitOrderForm(product);
    });
}


function submitOrderForm(product) {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const postOffice = document.getElementById('post-office').value;
    const payment = document.getElementById('payment').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    if (name && city && postOffice && payment && quantity) {
        const order = {
            name: name,
            city: city,
            postOffice: postOffice,
            payment: payment,
            quantity: quantity,
            comment: comment
        };

        const orders = getOrdersFromLocalStorage();
        orders.push(order);
        saveOrdersToLocalStorage(orders);

        showOrderDetails(order);
    } else {
        alert('Please fill in all required fields');
    }
}


function showOrderDetails(order) {
    orderForm.style.display = 'none';

    orderDetails.innerHTML = `
<h2>Order registration form</h2>
<p>Name of the buyer: ${order.name}</p>
<p>City: ${order.city}</p>
<p>Composition of New Mail to be sent: ${order.postOffice}</p>
<p>Payment method: ${order.payment}</p>
<p>Quantity: ${order.quantity}</p>
<p>Comment: ${order.comment}</p>
<button id="delete-order-button">Delete order</button>
`;

    const deleteButton = document.getElementById('delete-order-button');
    deleteButton.addEventListener('click', () => {
        deleteOrder(order);
    });
}


function deleteOrder(order) {
    const orders = getOrdersFromLocalStorage();
    const index = orders.findIndex(o => o.name === order.name && o.city === order.city && o.postOffice === order.postOffice && o.payment === order.payment && o.quantity === order.quantity && o.comment === order.comment);

    if (index !== -1) {
        orders.splice(index, 1);
        saveOrdersToLocalStorage(orders);
        showMyOrders();
    }
}


function getOrdersFromLocalStorage() {
    const ordersString = localStorage.getItem('orders');
    return ordersString ? JSON.parse(ordersString) : [];
}


function saveOrdersToLocalStorage(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}


function showMyOrders() {
    const orders = getOrdersFromLocalStorage();

    productList.innerHTML = '';
    productDetails.innerHTML = '';
    orderForm.style.display = 'none';
    orderDetails.innerHTML = '';

    for (const order of orders) {
        const orderItem = document.createElement('li');
        orderItem.innerHTML = `
    <p>Date: ${new Date().toLocaleString()}</p>
    <p>Price: ${order.quantity * categories[currentCategory][0].price} $</p>
    `;
        orderItem.addEventListener('click', () => {
            showOrderDetails(order);
        });
        productList.appendChild(orderItem);
    }
}


myOrdersButton.addEventListener('click', showMyOrders);


categoryList.addEventListener('click', (event) => {
    const category = event.target.dataset.category;
    if (category) {
        showProducts(category);
    }
});