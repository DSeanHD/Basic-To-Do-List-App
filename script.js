// Event Listener that allows the button to add an item to the list
let addItemsHandler = document.getElementById("addItemsHandler");
addItemsHandler.addEventListener("click", addItems);

// Display the date onload
let dateVar = new Date();
document.getElementById('time').innerHTML = "<b>Time:</b> " + dateVar.toLocaleTimeString()

// Function that displays the time in the header
function time() {
    let dateVar = new Date();
    document.getElementById('time').innerHTML = "<b>Time:</b> " + dateVar.toLocaleTimeString();
}

// The function that refreshes the clock in order to show the live time every second
setInterval(time, 1000);

// Element that displays the date in the header
document.getElementById('date').innerHTML = "<b>Date:</b> " + dateVar.toLocaleDateString();

let listItems = document.getElementById("list-items");
let userInput = document.getElementById("input-items");

function addItems() {
    if (userInput.value === "") {
        return null;
    } else {
        let li = document.createElement("li");
        li.innerText = userInput.value;
        listItems.appendChild(li);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        li.appendChild(deleteBtn);

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        li.appendChild(editBtn);

        deleteBtn.addEventListener("click", () => {
            listItems.removeChild(li);
        });

        editBtn.addEventListener("click", () => {
            let editText = prompt();
            if (editText === null || editText === "") {
                return null;
            } else {
                li.innerText = editText;
                li.appendChild(deleteBtn);
                li.appendChild(editBtn);
            }
        });
    }
}
