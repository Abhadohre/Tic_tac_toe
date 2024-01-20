let  boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-c");
let msg = document.querySelector("#msg");

let turn0 =true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]    
]
const resetGame = ()=>{
    turn0 =true;
    enableBox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText ="0";
            turn0 =false;

        }else{
            box.innerText="X";
            turn0 =true
        }
       box.disabled =true

        checkWinner();

    })
})

const disableBox =()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableBox =()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
}

const showWinner = (winner)=>{
    msg.innerText =`Congratulation, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}



const checkWinner = ()=>{
    for( pattern of winPatterns){
    let pos1 =boxes[pattern[0]].innerText;
    let pos2 =boxes[pattern[1]].innerText;
    let pos3 =boxes[pattern[2]].innerText;
        
        if(pos1 != ""&& pos2 != ""&& pos3 != ""){
            if(pos1 === pos2 && pos2=== pos3){
                console.log("Winner",pos1);
                showWinner(pos1);

            }

        }

    }
    
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)