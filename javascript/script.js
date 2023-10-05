const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addText(){
      if(inputBox.value === ''){
        alert("you must write something!");
      }
      else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
      }
      inputBox.value =''
      saveData()
}
//the function is use to check the list if it is completed or to remove if we dont need them
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove()  
          saveData()          
    }
}, false);

//function to save the data that we have written in our to do list. whenever we try to refresh the website the data will stay there 
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}
//displaying data again whenever we open the website
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}
showTask()
