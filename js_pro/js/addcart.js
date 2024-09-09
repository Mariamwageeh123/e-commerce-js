// // Ensure variables are declared only once in the entire script or across multiple scripts

// // For the cart
// let carts = JSON.parse(localStorage.getItem('cart')) || [];
// let email = localStorage.getItem('email');

// // Function to draw the cart items on the page
// let favs=document.querySelector('.favs')

// function draw() {
//     let alls = document.querySelector('.parent');
//     const y = carts.map((pro) => {
//         return `
//             <div class="product">
//                 <div class='img'>
//                     <img src="${pro.image}" alt="">
//                 </div>
//                 <div class="product_details">
//                     <h3>${pro.product}</h3>
//                     <h3>${pro.price}</h3>
//                     <h3>${pro.category}</h3>
//                     <div class="bt">
//                         <button class="btn btn-danger" onclick="removeFromCart(${pro.id})">Remove from cart</button>
//                     </div>
//                 </div>
    
//             </div>

//         `;
//     });
//     alls.innerHTML = y.join(''); // Use join to concatenate the array into a string
// }
// let p_t=document.querySelector('.total_price')
// function price() {
//     let total = 0;
//     carts.forEach((pro) => {
//         total += parseInt(pro.price);
//     })
//     p_t.innerHTML = `Total Price: $${total}`
    
// }


// function draws() {
//     let f=document.querySelector('.f')
//     const y = favoriteItems.map((pro) => {
//         return `
//             <div class="product">
//                 <div class='img'>
//                     <img src="${pro.image}" alt="">
//                 </div>
//                 <div class="product_details">
//                     <h3>${pro.product}</h3>
//                     <h3>${pro.price}</h3>
//                     <h3>${pro.category}</h3>
//                     <div class="bt">
//                         <span><button class="btn btn-danger" onclick="removeFromfav(${pro.id})"><i class="far fa-heart"></i></button></span>
//                     </div>
//                 </div>
//             </div>
//         `;
//     });
//     f.innerHTML = y.join(''); // Use join to concatenate the array into a string
// }


// // Function to remove an item from the cart by its id
// function removeFromCart(id) {
//     if (!email) {
//         window.location = '../html/login.html';
//     } else {
//         // Filter out the product with the given id
//         carts = carts.filter(pro => pro.id !== id);
        
//         // Update the cart in local storage
//         localStorage.setItem('cart', JSON.stringify(carts));
        
//         // Re-draw the cart items to reflect the removal
//         draw();
//     }
// }

// function removeFromfav(id) {
//     if (!email) {
//         window.location = '../html/login.html';
//     } else {
//         // Filter out the product with the given id
//         favoriteItems = favoriteItems.filter(pro => pro.id !== id);
        
//         // Update the cart in local storage
//         localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        
//         // Re-draw the cart items to reflect the removal
//         draws();
//     }
// }
// let productCount = carts.length;
// console.log(productCount);
// // Unique name for favorites array
// // let favoritesList = JSON.parse(localStorage.getItem('fav_c')) || [];

// // // Function to add an item to favorites
// // function addToFavorites(id) {
// //     if (!email) {
// //         window.location = '../html/login.html';
// //     } else {
// //         // Find the product by id
// //         const product = carts.find(pro => pro.id === id);

// //         // If the product exists and is not already in favorites, add it
// //         if (product && !favoritesList.some(fav => fav.id === product.id)) {
// //             favoritesList.push(product);
// //         }

// //         // Update the favorites in local storage
// //         localStorage.setItem('fav_c', JSON.stringify(favoritesList));

// //         // Optionally, re-draw the cart or show a message
// //         console.log("Added to favorites:", product.product);
// //     }
// // }

// // Initial draw to display the cart items
// draw();
// price();
// draws();


// Ensure variables are declared only once in the entire script or across multiple scripts

// For the cart
let carts = JSON.parse(localStorage.getItem('cart')) || [];
let email = localStorage.getItem('email');

// Function to calculate and display the total price
function price() {
    let total = 0;
    carts.forEach((pro) => {
        let cleanPrice = typeof pro.price === 'string'
            ? parseFloat(pro.price.replace('$', ''))
            : pro.price; // Handle as number if already numeric
        total += cleanPrice * (pro.quantity || 1);
    });
    let p_t = document.querySelector('.total_price');
    p_t.innerHTML = `Total Price: $${total.toFixed(2)}`;
}

// Function to draw the cart items on the page
function draw() {
    let alls = document.querySelector('.parent');
    const y = carts.map((pro, index) => {
        return `
            <div class="product">
                <div class='img'>
                    <img src="${pro.image}" alt="">
                </div>
                <div class="product_details">
                    <h3>${pro.product}</h3>
                    <h3>Price: $${pro.price}</h3>
                    <h3>Category: ${pro.category}</h3>
                    <div class="bt">
                        <button class="btn btn-danger r" onclick="removeFromCart(${pro.id})">Remove from cart</button>
                    </div>
                    <div class="quantity-controls">
                        <button class="btn btn-danger" onclick="increaseQuantity(${index})">+</button>
                        <span class="quantity">${pro.quantity || 1}</span>
                        <button class="btn btn-danger" onclick="decreaseQuantity(${index})">-</button>
                    </div>
                </div>
            </div>
        `;
    });
    alls.innerHTML = y.join('');
    price(); // Update total price whenever the cart is drawn
}

// Function to increase the quantity of an item in the cart
function increaseQuantity(index) {
    carts[index].quantity = (carts[index].quantity || 1) + 1;
    localStorage.setItem('cart', JSON.stringify(carts));
    draw();
}

// Function to decrease the quantity of an item in the cart
function decreaseQuantity(index) {
    if (carts[index].quantity > 1) {
        carts[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(carts));
        draw();
    }
}

// Function to remove an item from the cart by its id
function removeFromCart(id) {
    if (!email) {
        window.location = '../html/login.html';
    } else {
        carts = carts.filter(pro => pro.id !== id);
        localStorage.setItem('cart', JSON.stringify(carts));
        draw();
    }
}

// Function to draw favorite items on the page
function draws() {
    let f = document.querySelector('.f');
    const y = favoriteItems.map((pro) => {
        return `
            <div class="product">
                <div class='img'>
                    <img src="${pro.image}" alt="">
                </div>
                <div class="product_details">
                    <h3>${pro.product}</h3>
                    <h3>Price: $${pro.price}</h3>
                    <h3>Category: ${pro.category}</h3>
                    <div class="btt">
                        <span><button class="btn " onclick="removeFromfav(${pro.id})"><i class="far fa-heart text-danger  "></i></button></span>
                    </div>
                </div>
            </div>
        `;
    });
    f.innerHTML = y.join('');
}

// Function to remove an item from the favorites by its id
function removeFromfav(id) {
    if (!email) {
        window.location = '../html/login.html';
    } else {
        favoriteItems = favoriteItems.filter(pro => pro.id !== id);
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        draws();
    }
}

// Initial draw to display the cart and favorite items
draw();
price();
draws();