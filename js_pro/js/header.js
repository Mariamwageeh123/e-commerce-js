document.addEventListener('DOMContentLoaded', function () {
    let fn = localStorage.getItem('fn');
    let name = document.querySelector('.header_welcome');
    let logout = document.querySelector('.logout');
    let header_links = document.querySelector('.header_links');

    if (fn) {
        name.innerHTML += fn;
        name.style.display = 'block';
        header_links.remove();
        logout.style.display = 'block';
    }
});

let products = [
    {
        'image': '../images/iphon12.jpeg',
        "id": 1,
        'product': 'iphone 12',
        'price': '80$',
        'category': 'phones'
    },
    {
        'image': '../images/airpods.jpg',
        "id": 2,
        'product': 'airpods',
        'price': '20$',
        'category': 'airpods'
    },
    {
        'image': '../images/iphon12.jpeg',
        "id": 3,
        'product': 'iphone 12',
        'price': '180$',
        'category': 'phones'
    },
    {
        'image': '../images/glasses.jpeg',
        "id": 4,
        'product': 'glasses',
        'price': '280$',
        'category': 'glasses'
    },
    {
        'image': '../images/glasses2.jpeg',
        "id": 5,
        'product': 'glasses',
        'price': '40$',
        'category': 'glasses'
    },
    {
        'image': '../images/t-shirt.avif',
        "id": 6,
        'product': 'T-shirt',
        'price': '90$',
        'category': 'fashons'
    },
    {
        'image': '../images/t-shirt.jpeg',
        "id": 7,
        'product': 'T-shirt',
        'price': '10$',
        'category': 'fashons'
    },
    {
        'image': '../images/iphon.jpeg',
        "id": 8,
        'product': 'iphone 13',
        'price': '29$',
        'category': 'phones'
    },
    {
        'image': '../images/phone.jpg',
        "id": 9,
        'product': 'oppo reno',
        'price': '200$',
        'category': 'phones'
    },
];

let all = document.querySelector('.parent');

function draw() {
    const y = products.map((pro) => {
        return `
            <div class="product">
<div class="img">
    <img src="${pro.image}" alt="">
</div>
                <div class="product_details">
                    <h3>${pro.product}</h3>
                    <h3>${pro.price}</h3>
                    <h3>${pro.category}</h3>
                    <div class="bt">
                        <button class="btn btn-primary" onclick="check(${pro.id})">add to cart</button>
                        <span><button class="btn favs" onclick="favoriteItem(${pro.id})"><i class="far fa-heart"></i></button></span>
                    </div>
                </div>
            </div>
        `;
    });
    all.innerHTML = y.join('');
}
draw();

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let gmail = localStorage.getItem('email');

function check(id) {
    if (!gmail) {
        window.location = '../html/login.html';
    } else if((cart.find((item)=>item.id===id))) {
   alert(' It is in cart aready')
    }
    else{
        let choose = products.find((item) => item.id === id);
        cart = [...cart, choose];
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
        window.location = '../html/cart.html';
    }
}




let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
function favoriteItem(id) {
    if (!gmail) {
        window.location = '../html/login.html';
    } else {
        let chooses = products.find((item) => item.id === id);
        favoriteItems = [...favoriteItems, chooses];
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        console.log(favoriteItems);
        window.location = '../html/cart.html';
    }
}






// let l = localStorage.getItem('cart');
// let cartItems = JSON.parse(l);
// let p = document.querySelector('.pro');
// let addbtn=document.querySelector('.add')
// let countspan=document.querySelector('.count')
// let count=1
// function carts_h() {
//     if (p.style.display == 'none') {
//         p.style.display = 'block';
//     } else {
//         p.style.display = 'none';
//     }

//     p.innerHTML = '';
//     cartItems.forEach(item => {
//         p.innerHTML += item.product +`    <button class="add">+</button>
//     <span class="count"></span>
//     <button class="remove">-</button>`+ '<br>';
//     });
// }
// addbtn.addEventListener('onclick',()=>{
// count+=1
// countspan.innerHTML=count
// console.log(count)
// })




let l = localStorage.getItem('cart');
let cartItems = JSON.parse(l);
let p = document.querySelector('.pro');

function carts_h() {
    if (p.style.display == 'none') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }

    p.innerHTML = '';
    cartItems.forEach((item, index) => {
        p.innerHTML += `
            <div class="item">
                ${item.product}

            </div><br>`;
    });

    // Add event listeners after adding items to the DOM

}

// Call carts_h function to display the cart items
carts_h();




// let f=document.innerHTML('.f')

// Renamed the variable to avoid conflict
// let favoriteItems = JSON.parse(localStorage.getItem('addtofav')) || [];

// function addToFavorites(id) {
//     if (!gmail) {
//         window.location = '../html/login.html';
//     } else {
//         let chooses = products.find((item) => item.id === id);
//         favoriteItems = [...favoriteItems, chooses];
//         localStorage.setItem('addtofav', JSON.stringify(favoriteItems));
//         console.log(favoriteItems);
//         f.innerHTML +=favoriteItems
//         window.location = '../html/cart.html';

//     }
// }

//////////////////////////////////
// let search_input=document.querySelector('.input_search')
// let card=document.querySelector('.product')
// search_input.addEventListener('keyup',()=>{
//     let search_term=search_input.value.toLowerCase()
//     products.filter((item)=>{
//         if(item.product.toLowerCase().includes(search_term)){
//             card.style.display=''

//         }
//         else{
//             card.style.display='none'
//         }
//     })

// })
let searchInput = document.querySelector('.input_search input');
let searchType = document.getElementById('searchType');
let alll = document.querySelector('.parent');

searchInput.addEventListener('keyup', () => {
    let searchTerm = searchInput.value.toLowerCase();
    let filterType = searchType.value;

    // Filter the products based on the selected filter type and search term
    let filteredProducts = products.filter((item) => {
        if (filterType === 'product') {
            return item.product.toLowerCase().includes(searchTerm);
        } else if (filterType === 'category') {
            return item.category.toLowerCase().includes(searchTerm);
        }
    });

    // Re-render the filtered products
    renderProducts(filteredProducts);
});

function renderProducts(productList) {
    alll.innerHTML = productList.map((pro) => {
        return `
            <div class="product">
                <div class='img'>
                    <img src=${pro.image} alt="">
                </div>
                <div class="product_details">
                    <h3>${pro.product}</h3>
                    <h3>${pro.price}</h3>
                    <h3>${pro.category}</h3>
                    <div class="bt">
                        <button class="btn btn-primary" onclick="check(${pro.id})">add to cart</button>
                        <span><button class="btn btn-primary favs" onclick="favoriteItem(${pro.id})"><i class="far fa-heart"></i></button></span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Initial rendering of all products
renderProducts(products);


// ////////////////////////////////


//  // This will print the total number of products




// document.addEventListener('DOMContentLoaded', function () {
//     let fn = localStorage.getItem('fn');
//     let name = document.querySelector('.header_welcome');
//     let logout = document.querySelector('.logout');
//     let header_links = document.querySelector('.header_links');

//     if (fn) {
//         name.innerHTML += fn;
//         name.style.display = 'block';
//         header_links.remove();
//         logout.style.display = 'block';
//     }
// });

// let products = [
//     { 'image': '../images/iphon12.jpeg', "id": 1, 'product': 't-shirt', 'price': 80, 'category': 'fashion' },
//     { 'image': '../images/iphon12.jpeg', "id": 2, 'product': 'airpods', 'price': 20, 'category': 'airpods' },
//     { 'image': '../images/iphon12.jpeg', "id": 3, 'product': 'iphone 12', 'price': 180, 'category': 'phones' },
//     { 'image': '../images/iphon12.jpeg', "id": 4, 'product': 'iphone 15', 'price': 280, 'category': 'phones' },
//     { 'image': '../images/iphon12.jpeg', "id": 5, 'product': 'iphone 15', 'price': 280, 'category': 'phones' },
//     { 'image': '../images/iphon12.jpeg', "id": 6, 'product': 'iphone 15', 'price': 280, 'category': 'phones' },
//     { 'image': '../images/iphon12.jpeg', "id": 7, 'product': 'iphone 15', 'price': 280, 'category': 'phones' },
//     { 'image': '../images/iphon12.jpeg', "id": 8, 'product': 'iphone 15', 'price': 280, 'category': 'phones' },
//     { 'image': '../images/iphon12.jpeg', "id": 9, 'product': 'iphone 15', 'price': 280, 'category': 'phones' },
// ];

// let all = document.querySelector('.parent');

// function draw() {
//     const y = products.map((pro) => {
//         return `
//             <div class="product">
//                 <div class='img'>
//                     <img src=${pro.image} alt="">
//                 </div>
//                 <div class="product_details">
//                     <h3>${pro.product}</h3>
//                     <h3>${pro.price}$</h3>
//                     <h3>${pro.category}</h3>
//                     <div class="bt">
//                         <button class="btn btn-primary" onclick="check(${pro.id})">add to cart</button>
//                         <span><button class="btn btn-primary favs" onclick="favoriteItem(${pro.id})"><i class="far fa-heart"></i></button></span>
//                     </div>
//                 </div>
//             </div>
//         `;
//     });
//     all.innerHTML = y.join('');
// }
// draw();

// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// let gmail = localStorage.getItem('email');

// function check(id) {
//     if (!gmail) {
//         window.location = '../html/login.html';
//     } else if ((cart.find((item) => item.id === id))) {
//         alert('It is in the cart already');
//     } else {
//         let choose = products.find((item) => item.id === id);
//         cart = [...cart, choose];
//         localStorage.setItem('cart', JSON.stringify(cart));
//         console.log(cart);
//         window.location = '../html/cart.html';
//     }
// }

// let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];

// function favoriteItem(id) {
//     if (!gmail) {
//         window.location = '../html/login.html';
//     } else {
//         let chooses = products.find((item) => item.id === id);
//         favoriteItems = [...favoriteItems, chooses];
//         localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
//         console.log(favoriteItems);
//         window.location = '../html/cart.html';
//     }
// }

// let l = localStorage.getItem('cart');
// let cartItems = JSON.parse(l);
// let p = document.querySelector('.pro');

// function carts_h() {
//     if (p.style.display == 'none') {
//         p.style.display = 'block';
//     } else {
//         p.style.display = 'none';
//     }

//     p.innerHTML = '';
//     cartItems.forEach((item) => {
//         p.innerHTML += `
//             <div class="item">
//                 ${item.product}
//             </div><br>`;
//     });

//     // Add event listeners after adding items to the DOM
//     // document.querySelectorAll('.add').forEach(btn => {
//     //     btn.addEventListener('click', function () {
//     //         let index = this.getAttribute('data-index');
//     //         let countSpan = document.querySelector(`.count[data-index="${index}"]`);
//     //         let priceSpan = document.querySelector(`.price[data-index="${index}"]`);
//     //         let count = parseInt(countSpan.innerHTML);
//     //         count += 1;
//     //         countSpan.innerHTML = count;

//     //         // Update the price based on count and update the product array
//     //         let productId = cartItems[index].id;
//     //         let originalPrice = parseFloat(products.find(p => p.id === productId).price);
//     //         let newPrice = originalPrice * count;
//     //         priceSpan.innerHTML = newPrice + '$';

//     //         // Update the price in the product array
//     //         cartItems[index].price = newPrice;
//     //         localStorage.setItem('cart', JSON.stringify(cartItems));

//     //         console.log(count, newPrice);
//     //     });
//     // });

//     document.querySelectorAll('.remove').forEach(btn => {
//         btn.addEventListener('click', function () {
//             let index = this.getAttribute('data-index');
//             let countSpan = document.querySelector(`.count[data-index="${index}"]`);
//             let priceSpan = document.querySelector(`.price[data-index="${index}"]`);
//             let count = parseInt(countSpan.innerHTML);
//             if (count > 1) {
//                 count -= 1;
//                 countSpan.innerHTML = count;

//                 // Update the price based on count and update the product array
//                 let productId = cartItems[index].id;
//                 let originalPrice = parseFloat(products.find(p => p.id === productId).price);
//                 let newPrice = originalPrice * count;
//                 priceSpan.innerHTML = newPrice + '$';

//                 // Update the price in the product array
//                 cartItems[index].price = newPrice;
//                 localStorage.setItem('cart', JSON.stringify(cartItems));

//                 console.log(count, newPrice);
//             }
//         });
//     });
// }

// // Call carts_h function to display the cart items
// carts_h();

// let searchInput = document.querySelector('.input_search input');
// let searchType = document.getElementById('searchType');
// let alll = document.querySelector('.parent');

// searchInput.addEventListener('keyup', () => {
//     let searchTerm = searchInput.value.toLowerCase();
//     let filterType = searchType.value;

//     // Filter the products based on the selected filter type and search term
//     let filteredProducts = products.filter((item) => {
//         if (filterType === 'product') {
//             return item.product.toLowerCase().includes(searchTerm);
//         } else if (filterType === 'category') {
//             return item.category.toLowerCase().includes(searchTerm);
//         }
//     });

//     // Re-render the filtered products
//     renderProducts(filteredProducts);
// });

// function renderProducts(productList) {
//     alll.innerHTML = productList.map((pro) => {
//         return `
//             <div class="product">
//                 <div class='img'>
//                     <img src=${pro.image} alt="">
//                 </div>
//                 <div class="product_details">
//                     <h3>${pro.product}</h3>
//                     <h3>${pro.price}$</h3>
//                     <h3>${pro.category}</h3>
//                     <div class="bt">
//                         <button class="btn btn-primary" onclick="check(${pro.id})">add to cart</button>
//                         <span><button class="btn btn-primary favs" onclick="favoriteItem(${pro.id})"><i class="far fa-heart"></i></button></span>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }).join('');
// }

// // Initial rendering of all products
// renderProducts(products);
