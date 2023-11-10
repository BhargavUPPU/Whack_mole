const board=document.getElementById("board");
let currMoleTile;
let currPlantTile;
let score=0;
let gameOver=false;
window.onload=function(){
    return startGame();
}
setInterval(setMole,2000);
setInterval(setPlant,3000);
function startGame(){
    for(let i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTitle);
        board.appendChild(tile);

    }
   
}
function randomTitle(){
    let num=Math.floor(Math.random()*9);
    return num.toString();

}
function setMole(){
    if (gameOver){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML="";
    }

    let mole =document.createElement("img");
    mole.src="./monty-mole.png";
    let num=randomTitle();
    if(currMoleTile&& currMoleTile.id===num){
        return;
    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
  
}
function setPlant(){
    if(gameOver){
        return;
    }

    if(currPlantTile){
        currPlantTile.innerHTML="";
    }

    let mole=document.createElement('img');
    mole.src="./piranha-plant.png";
    let num=randomTitle();
    if(currPlantTile && currPlantTile.id ===num){
        return;
    }
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(mole);
}
function selectTitle(){
   
    if(this  === currMoleTile){

        if (gameOver) {
            return;
        } else {
            score +=10;
            document.getElementById("score").innerHTML="score: "+score.toString();
        }
       
    }
    if(this === currPlantTile)
    {
        document.getElementById("score").innerHTML="GAME OVER: "+score.toString();
        gameOver=true;
    }
}