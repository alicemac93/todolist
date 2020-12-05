// event targets
let greeting = document.getElementById("date");
let list = document.getElementById("myList");
const addButton = document.getElementById("addNew");
let numberOfTasks = document.getElementById("noOfTasks");
let input = document.getElementById("newInput");
const deleteAll = document.getElementById("deleteAll");
const checkAll = document.getElementById("checkAll");
let noOfTimesClicked = 0;

// other
let listArray = [];

// !!! have to add the async await function so it loads immediately
let myTime = setInterval(updateDate, 1000);
// function that updates the date
function updateDate() {
    let today = new Date();
    let date = today.toLocaleString();
    let hour = today.getHours();
    let timeOfTheDay;
    if (hour < 12){timeOfTheDay = "Good morning,";
    } else if (hour < 19){timeOfTheDay = "Good afternoon,";}
    else if (hour > 19){timeOfTheDay = "Good evening,";}
    else {timeOfTheDay = "It is too late to be writing your tasks now! do it in the morning."}
    let message = `${timeOfTheDay} it is ${date}`
    greeting.innerHTML = message; 
}

// function that creates an element (which wont be triggered until the event listener from next step is triggered)
var CreateNewElement = function(){
    let listItem = document.createElement("li");
        listItem.id = "listItem";
        return listItem;
}

// function that adds input text & delete button to the element
addButton.addEventListener("click", addNewTask);
function addNewTask() {
    let listItem = CreateNewElement();
    let text = document.createTextNode(input.value);
    listItem.appendChild(text);
    let deletebutton = document.createElement("img");
        deletebutton.src ="./img/delete.png";
        deletebutton.classList = "icon";
    if (input.value === "") {alert("task is empty");
} else {
    listItem.appendChild(deletebutton)
    list.appendChild(listItem);
    listArray.push(input);
};
deletebutton.addEventListener("click", deleteTask);
document.getElementById("newInput").value = ""; // deletes the value after I add it
changeNumber();
}; 

// post task with keypress (keyup)
 input.addEventListener("keyup", addTaskKey);
 function addTaskKey(event){
     if (event.keyCode === 13){
         addNewTask();
     }};
 
// function that deletes the element
function deleteTask(event){
    var listItem=this.parentNode;
    if (event.target.tagName === "IMG"){
        list.removeChild(listItem);
        listArray.pop(input);
        changeNumber();
    }
}

// function that changes the element into crossed style
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      if (event.target.classList.toggle("checked")){
        listArray.pop(event.target);
        changeNumber();
      } else {listArray.push(event.target);
        changeNumber();
    };
    }; 
}, false);


// deleting all items
deleteAll.addEventListener("click", deleteItems);
function deleteItems() {
 list.innerHTML = "";
 listArray = [];
 changeNumber();
}

deleteAll.addEventListener("mouseenter", mouseIn);
function mouseIn() {
    deleteAll.innerHTML = "are you sure?";
};
deleteAll.addEventListener("mouseleave", mouseOut);
function mouseOut() {
    deleteAll.innerHTML = "Delete all";
};

// check all items 
checkAll.addEventListener("click", checkItems);
function checkItems() {
    let hasItems = list.childElementCount;
    list.classList.toggle("checked") 
    noOfTimesClicked++;
    
    if (noOfTimesClicked % 2 === 1 && hasItems !== 0) { // add this concept
    this.innerHTML = "Undo"
    numberOfTasks.innerHTML = 0} 
    else {this.innerHTML = "Mark all as done";
    changeNumber();};
}
// function that updates the number of tasks to be done.
function changeNumber(){
    let tasksInArray = listArray.length;
    numberOfTasks.innerHTML = tasksInArray; 
}
