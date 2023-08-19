

let items = [];
let inputField = document.getElementById("inputField");
window.onload = renderItems();
function additem() {
    // let dataList = document.getElementById("dataList");
    if (inputField.value === "") {
        alert("you must write somthing!")
    }
    else {
        items.push(inputField.value);
        renderItems();
        inputField.value = '';
    }
}

function renderItems() {
    let dataList = document.getElementById("dataList");
    dataList.innerHTML = '';
    items.map((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div>
        <span id="${index}">${item}</span>
        <button onclick="editItem(${index})" class="btn btn-danger mt-2">Edit</button>
        <button onclick="deleteSingleItem(${index})" class="btn btn-danger mt-2">Delete</button>
        </div>
        `;
        dataList.appendChild(div);
    });
}

function deleteSingleItem(id) {
    console.log("id", id)
    items.splice(id, 1)
    renderItems();
}

function editItem(id) {
    let value = document.getElementById(id).innerText;
    inputField.value = value;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("updateButton").style.display = "block";
    document.getElementById("updateButton").onclick = function () {
        updateItem(id); // Pass the id to the updateItem function
    };
}

function updateItem(id) {
    items.splice(id, 1, inputField.value);
    renderItems()
}

function deleteAll() {
    items = [];
    renderItems()
}