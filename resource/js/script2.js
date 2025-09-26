// Adds an event listener to the element with the ID 'buttons'.
// It listens for a 'click' event. When triggered, it calls the 'subMit' function.
document.getElementById('buttons').addEventListener('submit', subMit);

// Adds an event listener to the element with the ID 'remove'.
// It calls the 'removeItem' function when a 'click' event occurs.
document.getElementById('remove').addEventListener('click', removeItem);

// Adds an event listener to the element with the ID 'add'.
// It calls the 'addItem' function when a 'click' event occurs.
document.getElementById('add').addEventListener('click', addItem);

// This function is executed when the 'click' event on the '#buttons' element is triggered.
function subMit(){
    // Displays a series of pop-up alert messages to the user.
    alert("Successfully sent a message");
    alert("Thank you for Feedback");
    alert("We will get back to you soon");
}

// This function handles the logic for removing an item from the cart.
function removeItem(){
    // Creates a pop-up prompt asking the user for confirmation.
    // .toLowerCase() converts the user's input to lowercase to make the check case-insensitive (e.g., 'Y' becomes 'y').
    let qust = prompt("Are you sure you want to remove this item from cart? Y/N").toLowerCase();

    // A switch statement to handle the user's response.
    switch(qust){
        // If the user entered 'y'.
        case 'y':
            alert("Item removed from cart");
            break; // Exits the switch statement.
        // If the user entered 'n'.
        case 'n':
            alert("Item not removed from cart");
            break; // Exits the switch statement.
        // If the user entered anything else.
        default:
            alert("Invalid input");
    }
}

// This function simply alerts the user that an item has been added.
function addItem(){
    alert("Item added to cart");
}