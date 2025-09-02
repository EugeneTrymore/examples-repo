// Grocery list items
let groceries = ["Milk", "Bread", "Apples", "Eggs"];

// Show items on the page
function showList() {
  let list = document.getElementById("itemList");
  list.innerHTML = ""; 

  for (let i = 0; i < groceries.length; i++) {
    let item = groceries[i];

    let li = document.createElement("li");
    li.textContent = item;

    // Delete button
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = function () {
      groceries.splice(i, 1);
      showList(); // Refresh list
    };

    li.appendChild(btn);
    list.appendChild(li);
  }
}

// Add item to the list
function addItem() {
  let input = document.getElementById("itemInput");
  let newItem = input.value;

  if (newItem === "") {
    alert("Please enter an item.");
  } else {
    groceries.push(newItem);
    input.value = "";
    showList();
  }
}

// Press Enter to add item
document.getElementById("itemInput").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

// Show the initial list
showList();
