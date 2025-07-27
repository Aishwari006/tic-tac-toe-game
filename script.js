let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

//to store the winning patterns
let turn_o = true; //if turn of o is true
let count=0
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//adding event listener in each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn_o) {
      box.innerText = "O";
      turn_o = false;
    } else {
      box.innerText = "X";
      turn_o = true;
    }
    box.disabled = true; //so that we can't change the value once its X or O
    count++;
   
    checkWinner(); //this will be called everytime a box is clicked
     if (count === 9) {
       msgContainer.classList.remove("hide");
       msg.innerText = "It's a Draw!";
       disableBoxes();
     }
     count = 0;
  });
});

const showWinner = (pos1) => {
  msgContainer.classList.remove("hide");
  msg.innerText = "Winner is " + pos1;
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
    }
}
const checkWinner = () => {
    let flag=0;
  for (let pattern of winPatterns) {
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );
    //boxes[pattern[0]] means in the box go to the 1st position
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
         console.log("Winner is ", pos1);
         showWinner(pos1);
         count=0;
         disableBoxes();
      }
    }
  }
};

newGameBtn.addEventListener("click",()=>{
for(let box of boxes){
    box.innerText=""
    enableBoxes()
    msg.innerText=""
    //or we can write msgContainer.classList.add("hide")
}
})
