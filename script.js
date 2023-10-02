const form = document.getElementById("addForm");
const itemList = document.getElementById("items");

// form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

function addItem(e) {
  e.preventDefault();

  // get input value
  const newItem = document.getElementById("item").value;
  //   console.log(newItem);

  // create new li element
  const li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
  // create delete button element
  const deleteBtn = document.createElement("button");

  // Add classes to add buttion
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // Append Button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
