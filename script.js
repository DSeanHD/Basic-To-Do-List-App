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
const addItemsBtn = document.getElementById("addItemsBtn");

let listStorage = JSON.parse(localStorage.getItem("todo-items")) || [];

const addItems = () => {
    if (userInput.value === "") {
        return null;
    } else {
        listStorage.push(userInput.value);
        localStorage.setItem("todo-items", JSON.stringify(listStorage));

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
            // Remove item from localStorage
            listStorage = listStorage.filter(item => item !== userInput.value);
            localStorage.setItem("todo-items", JSON.stringify(listStorage));
        });

        editBtn.addEventListener("click", () => {
            let editText = prompt("Edit your item:", userInput.value);
            if (editText === null || editText === "") {
                return null;
            } else {
                // Update the item in localStorage
                let index = listStorage.indexOf(userInput.value);
                if (index !== -1) {
                    listStorage[index] = editText;
                    localStorage.setItem("todo-items", JSON.stringify(listStorage));
                }

                li.innerText = editText;
                li.appendChild(deleteBtn);
                li.appendChild(editBtn);
            }
        });
    }
}

let listParse = JSON.parse(localStorage.getItem("todo-items"));

window.addEventListener("load", () => {
    listParse.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        listItems.appendChild(li);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        li.appendChild(deleteBtn);

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        li.appendChild(editBtn);

        deleteBtn.addEventListener("click", () => {
            listItems.removeChild(li);
            // Remove item from localStorage
            listStorage = listStorage.filter(listItem => listItem !== item);
            localStorage.setItem("todo-items", JSON.stringify(listStorage));
        });

        editBtn.addEventListener("click", () => {
            let editText = prompt("Edit your item:", item);
            if (editText === null || editText === "") {
                return null;
            } else {
                // Update the item in localStorage
                let index = listStorage.indexOf(item);
                if (index !== -1) {
                    listStorage[index] = editText;
                    localStorage.setItem("todo-items", JSON.stringify(listStorage));
                }

                li.innerText = editText;
                li.appendChild(deleteBtn);
                li.appendChild(editBtn);
            }
        });
    });
});

addItemsBtn.addEventListener("click", addItems);
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addItems();
    }
});