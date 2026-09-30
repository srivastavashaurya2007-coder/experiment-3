let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function() {

    let task = input.value;

    if (task !== "") {

        // Create a new list item
        let li = document.createElement("li");

        // Add task text
        li.textContent = task;

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Delete task
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        // Add delete button to list item
        li.appendChild(deleteBtn);

        // Add list item to the list
        list.appendChild(li);

        // Clear input
        input.value = "";
    }
});