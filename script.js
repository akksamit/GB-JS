// const products = [
//     {id: 1, title: 'Laptop', price: 10000},
//     {id: 2, title: 'Mouse', price: 1000},
//     {id: 3, title: 'Keyboard', price: 2000},
//     {id: 4, title: 'Soundbar', price: 5000},
// ];

// const renderProduct = (title, price) => `<div class="product-item">
//             <h3>${title}</h3>
//             <p>${price}</p>
//             <button class="buy-btn">Add</button>
//             </div>`;
// ;

// const renderProducts = (list) => {
//     const productList = list.map((item) => {
//         return renderProduct(item.title, item.price);
//     });

//     document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item)).join(''))
// };

// renderProducts(products);


class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.goodsObjects = [];

        this.fetchGoods();
        this.render();
    }

    fetchGoods() {
        this.goods = [
             {id: 1, title: 'Laptop', price: 10000},
             {id: 2, title: 'Mouse', price: 1000},
             {id: 3, title: 'Keyboard', price: 2000},
             {id: 4, title: 'Soundbar', price: 5000},
        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (const product of this.goods) {
            const productObject = new ProductItem(product);
            this.goodsObjects.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}

class ProductItem {
    constructor (item, img = 'https://via.placeholder.com/150') {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        this.img = img;
    }

    getHTMLString(){
        return `<div class="product-item" data-id="${this.id}">
                     <img src="${this.img}" alt="some img">
                     <div class="desc">
                        <h3>${this.title}</h3>
                         <p>${this.price}</p>
                         <button class="buy-btn">Add</button>
                     </div>
                  </div>`;

    }
}

const catalog = new ProductsList();