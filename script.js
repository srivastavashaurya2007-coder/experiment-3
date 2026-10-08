let input = document.getElementById("task");
let button = document.getElementById("btn");
let list = document.getElementById("taskList");

button.onclick = function() {

    if (input.value == "") {
        return;
    }

    let task = document.createElement("li");

    task.innerHTML = input.value;

    list.appendChild(task);

    input.value = "";
};
