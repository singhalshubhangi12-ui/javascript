let inputbox=document.getElementById("inputbox");
let listcontainer=document.getElementById("listcontainer");
let progressbar=document.getElementById("progress")
let completed = 0;
function updateprogress(){
    let totalTasks=listcontainer.children.length;
    let percent;

    if(totalTasks === 0){
        percent = 0;
    } else {
        percent=(completed/totalTasks) * 100;
    }

    progressbar.style.width = percent + "%";
}



function completeTask(){
    completed++;
    updateprogress();
}


function addtask(event){
    event.preventDefault();
    if(inputbox.value===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
    }
    inputbox.value = ""; 
    
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    
    if(e.target.classList.contains("checked")){
            completed++;
        } else {
            completed--;
        }

        updateprogress();
    }
    else if(e.target.tagName==="SPAN"){
        let li = e.target.parentElement;
       
         if(li.classList.contains("checked")){
            completed--;
         }
    li.remove();
    updateprogress();
    }
},false);
function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
