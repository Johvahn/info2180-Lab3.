//Name:Johvahn Brown 
var turn = 1;
// board_layout function uses a for loop to append the square class to each div under id board.
function board_layout(){
    var outDiv = document.getElementById("board");
    var inDiv = outDiv.getElementsByTagName("div");
    for (var int = 0; int < inDiv.length; int++){
    inDiv[int].className = "square";
    }
   
}


function activeClick(){
    var outDiv = document.getElementById("board");
    let btn = outDiv.getElementsByTagName("div");
    for (const btnA of btn){
        btnA.addEventListener("click", function(){
        if (turn == 1){
            btnA.innerHTML = "X";
            btnA.classList.add("X");
            btnA.style.pointerEvents = 'none';            
            turn = 0;
            playTest();
        }
        else{
            btnA.innerHTML = "O";
            btnA.classList.add("O");
            btnA.style.pointerEvents = 'none';
            turn = 1;
            playTest();
        }
      })
    }
   
}

// The hoveron functions set listners of each to div to detect when the mouse is one the squares.
function HoverOn(){
    var outDiv = document.getElementById("board");
    var btn = outDiv.getElementsByTagName("div");
    for (const btnA of btn){
        btnA.addEventListener("mouseover", function(){
            btnA.classList.add("hover");
        })
    }

}


// The hoveroff functions set listners of each to div to detect when the mouse is away from the square.
function HoverOff(){
    var outDiv = document.getElementById("board");
    var btn = outDiv.getElementsByTagName("div");
    for (const btnA of btn){
        btnA.addEventListener("mouseout", function(){
            btnA.classList.remove("hover");
        })
    }
}





function playTest(){
    var outDiv = document.getElementById("board");
    var btn = outDiv.getElementsByTagName("div");
    var status = document.getElementById("status");
    
    if (btn[0].innerHTML == "X" && btn[1].innerHTML == "X" && btn[2].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}
    }
    
    else if (btn[0].innerHTML == "X" && btn[3].innerHTML == "X" && btn[6].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}
    }
    
    else if (btn[6].innerHTML == "X" && btn[7].innerHTML == "X" && btn[8].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}
    }
    
    else if (btn[2].innerHTML == "X" && btn[5].innerHTML == "X" && btn[8].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}
    }
    
    else if (btn[0].innerHTML == "X" && btn[4].innerHTML == "X" && btn[8].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}
    }
    
    else if (btn[2].innerHTML == "X" && btn[4].innerHTML == "X" && btn[6].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}
    }
    else if (btn[1].innerHTML == "X" && btn[4].innerHTML == "X" && btn[8].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}
    }
    else if (btn[3].innerHTML == "X" && btn[4].innerHTML == "X" && btn[5].innerHTML == "X"){ 
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");  
        for( const btn of btn){btn.style.pointerEvents = 'none';}                
    }
                       
                       ///Checks for player 2 begins ///
    else if (btn[0].innerHTML == "O" && btn[1].innerHTML == "O" && btn[2].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
    
    else if (btn[0].innerHTML == "O" && btn[3].innerHTML == "O" && btn[6].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
    
    else if (btn[6].innerHTML == "O" && btn[7].innerHTML == "O" && btn[8].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
    
    else if (btn[2].innerHTML == "O" && btn[5].innerHTML == "O" && btn[9].innerHTML== "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
    
    else if (btn[0].innerHTML == "O" && btn[4].innerHTML == "O" && btn[8].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
    
    else if (btn[2].innerHTML == "O" && btn[4].innerHTML == "O" && btn[6].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
    
    else if (btn[1].innerHTML == "O" && btn[4].innerHTML == "O" && btn[7].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
    
    else if (btn[3].innerHTML == "O" && btn[4].innerHTML == "O" && btn[5].innerHTML == "O"){ 
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
    
    else if ((btn[0].innerHTML == "O" || btn[0].innerHTML == "X") && (btn[1].innerHTML == "O" || btn[1].innerHTML == "X") 
        && (btn[2].innerHTML == "O" || btn[2].innerHTML == "X" ) && (btn[3].innerHTML == "O" || btn[3].innerHTML == "X" ) 
        && (btn[4].innerHTML == "O" || btn[4].innerHTML == "X" ) && (btn[5].innerHTML == "O" || btn[5].innerHTML == "X" )
        && (btn[6].innerHTML == "O" || btn[6].innerHTML == "X" ) && (btn[7].innerHTML == "O" || btn[7].innerHTML == "X" )
        && (btn[8].innerHTML == "O" || btn[8].innerHTML == "X" )){ 
        status.innerHTML = "We have a tie!";
        status.classList.add("you-won");
        for( const btn of btn){btn.style.pointerEvents = 'none';}   
    }
  
}
document.addEventListener("DOMContentLoaded",function(){
    board_layout();
    activeClick();
    HoverOn();
    HoverOff();
    restart();  
    playTest();
})