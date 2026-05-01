let boxes=document.querySelectorAll(".box");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#winner");
let resetbtn=document.querySelector("#reset-btn")  //given by id
let turnO=true;    //playerX , playerO
let count=0
const patterns=[                   //2d array
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
//add eventlistner
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{  //() because "no argument" as variable is passed
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;


        checkwinner();
        if(!checkwinner() && count==9){
            draw()
        }

    }

    )
}
)
const resetgame=()=>{
    for (let b of boxes) {
        b.disabled = false;
    
    b.innerText="";  //empty
    }
    turnO=true;
       count=0;
    msgcontainer.classList.add("hide");  //hide the winner class

}
const showwinner=(winners) => {
    msg.innerText = `Congratulations, You Win ${winners}`;

    msgcontainer.classList.remove("hide");
    //now disable all the buttons as winner is decided
     for (let b of boxes) {
        b.disabled = true;
    }
}

const checkwinner=()=>{
    for(let pattern of patterns){
        let pos1val=boxes[pattern[0]].innerText  //to get O or X from box
        let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText
    
    if(pos1val!=="" && pos2val!=="" && pos3val!==""){  //not empty
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner");
            showwinner(pos1val);
            return;
        }
    }
    
    }
}
//**draw**

const draw=()=>{
    if(!checkwinner()){
        msg.innerText="Game Draw";
        msgcontainer.classList.remove("hide");
    }
}


resetbtn.addEventListener("click",resetgame);

