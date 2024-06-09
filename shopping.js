// Assignment: Shopping Cart
// Objective: Create a shopping cart application using only HTML, CSS, and JavaScript. The
// application will have a front-end interface where users can select items from dropdown lists,
// specify quantities, view the cart items, and see the total cart value. Use a data structure like a
// Map to manage the cart items.
// User Interface: Dropdown lists can be used for selecting items and input fields for specifying
// quantities. Display the cart items in a table, including the item name, quantity, individual item
// price, and total price for each item. Display the total cart value at the bottom of the page. Style
// the application using CSS to ensure a clean and user-friendly interface.
// Assignment: Shopping Cart..
// Functionality: Implement functionality to add items to the cart with specified
// quantities. Update the cart display dynamically as items are added. Also add a
// functionality to delete items from cart. Calculate and display the total price for
// each item and the total cart value. Use a Map to manage the cart items, where the
// key is the item name and the value is an object containing the quantity and price.

let products=new Map([
    [Milk,30]
    [Biscuit,40]
    [Butter,35]
    [SourceMap,20]
]);

const cart=new Map();

function addcart(){
    let itemselect=document.getElementById('s1').value;
    let quantity=parseInt(document.getElementById('q1').value);

    if(cart.has(itemselect)){
        cart.set(itemselect,cart.get(itemselect)+quantity)
    }
    else{
        cart.set(itemselect,quantity)
    }
    displaycart()
}

function displaycart() {
    const cartTable = document.getElementById('carttab');
    const totalDiv = document.getElementById('total');

    // Clear the table
    cartTable.innerHTML = '<tr><th>ITEM</th><th>QUANTITY</th><th>PRICE</th><th>TOTAL</th></tr>';

    let totalCost = 0;
     // calculate the table with cart items
     cart.forEach((quantity,itemselect) => {
        const price = s1.get(itemselect);
        const totalItemCost = quantity * price;
        totalCost += totalItemCost;


const row = document.createElement('tr');
        row.innerHTML = `<td>${itemselect}</td><td>${quantity}</td><td>Rs${price.toFixed(2)}</td><td>Rs${totalItemCost.toFixed(2)}</td>`;
        cartTable.appendChild(row);
    });

    // Display total cost
    totalDiv.textContent = `Total: Rs${totalCost.toFixed(2)}`;
}