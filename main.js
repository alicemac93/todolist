
// add new task
let list = document.getElementById("myList");
const addButton = document.getElementById("addNew");
let numberOfTasks = document.getElementById("noOfTasks");
let listArray = [];

addButton.addEventListener("click", addNewTask);
function addNewTask() {
    let listItem = document.createElement("li");
    listItem.id = "listItem";
    let input = document.getElementById("newInput").value;
    let text = document.createTextNode(input);
    listItem.appendChild(text);
    list.appendChild(listItem)

    if (input === "") {alert("task is empty");
} else {
    list.appendChild(listItem)
    listArray.push(input); 
};

document.getElementById("newInput").value = ""; // deletes the value after I add it

let deletebutton = document.createElement("img");
deletebutton.src ="./img/delete.png";
deletebutton.classList = "icon";
if (input !== "") {
    listItem.appendChild(deletebutton);}
deletebutton.addEventListener("click", deleteTask)

function deleteTask(event){
    if (event.target.tagName === "IMG"){
        list.removeChild(listItem)
        listArray.pop(input);
    }
}

// doesnt work as it should and why is it in the addNew? I want it to be 
function changeNumber(){
    let no = listArray.length;
numberOfTasks.innerHTML = no; 
}
changeNumber();
return listItem;
}
console.log(listItem);


// mark as done
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
}, false);


// date function

let date = document.getElementById("date");
function updateDate() {
    let today = new Date().toDateString();
    date.innerHTML = today;
}
updateDate();




