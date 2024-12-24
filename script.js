console.log("welcome to tic tac toe")
let music=new Audio("music.mp3")
let audioTurn=new Audio("music.mp3")
let gameover=new Audio("gameover.mp3")
let turn ="X"
let isgameover=false;

//fumction to change the turn
const changeTurn= ()=>
    {
      return turn ==="X" ? "0": "X";
    }
//Function to check win
const checkWin=()=>
    {
        let boxtext= document.getElementsByClassName('boxtext');
       let wins= [
        [0,1,2,5,5,0],
        [3,4,5,5,5,15],
        [6,7,8,5,15,0],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
       ]
       wins.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== " ") ){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText + "Won"
        isgameover = true
        document.querySelector('.imgbox').getElementsByTagName('.img')[0].style.width = "200px";
        document.querySelector(".line").style.width ="20vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
    }
    })
}
    
    // game logic
    music.play()
    let boxes=document.getElementsByClassName("box");
    Array.from(boxes).forEach(element=>{
        let boxtext=element.querySelector('.boxtext');
        element.addEventListener('click',()=>
        {
            if(boxtext.innerText === ''){
                boxtext.innerText = turn;
                turn = changeTurn();
                audioTurn.play();
                checkWin();
                if(!isgameover)
                    {
                        document.getElementsByClassName("info")[0].innerText="Turn for" + turn;
                    }
               

            }
        })
    })
    //add on click listener to reset button
    reset.addEventListener('click',()=>{
        let boxtext=document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(element=>{
             element.innerText=""
        });
        turn="X";
        isgameover=false
         document.querySelector(".line").style.width ="0vw";
        document.getElementsByClassName("info")[0].innerText="Turn for" + turn;
        document.querySelector('.imgbox').getElementsByTagName('.img')[0].style.width = "0px"
    })