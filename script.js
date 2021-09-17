const products = [
    {id: 1, title: 'Laptop', price: 10000},
    {id: 2, title: 'Mouse', price: 1000},
    {id: 3, title: 'Keyboard', price: 2000},
    {id: 4, title: 'Soundbar', price: 5000},
];

const renderProduct = (title, price) => `<div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="buy-btn">Add</button>
            </div>`;
;

const renderProducts = (list) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item)).join(''))
};

renderProducts(products);