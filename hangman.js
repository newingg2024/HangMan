let challenge = "MANCHESTER";

function GenerateLetters(){

    let letterBox =[];
    for(i = 65 ; i <= 90 ;i++){
        letterBox.push(String.fromCharCode(i));
        
    }
    return letterBox;
}
function GenerateDashes(){
    let dash_line =[];
    for(let i=0 ; i<challenge.length;i++){
        console.log(challenge[i]);
        let displayContainerEl = document.getElementById('display');
        let letterDiv =document.createElement('div');
        
        letterDiv.id=challenge[i]+'_id';
        
        displayContainerEl.appendChild(letterDiv);
        //creating the dash div
        let dashDiv =document.createElement('div');
        dashDiv.id='dashDiv';
        dashDiv.textContent='_';

        let charDiv = document.createElement('div');
        charDiv.id='charDiv';
        charDiv.textContent=challenge[i];
        charDiv.classList='hide';
        letterDiv.appendChild(charDiv);
        letterDiv.appendChild(dashDiv);

    }
    
}

let lives = 10;
function DisplayLives(){
    console.log(lives);
    let livesEl = document.getElementById('lives');
    livesEl.textContent= 'lives left: ' + lives;

}

function MatchingAlgo(event){
    event.target.disabled = true;
    const user_input= event.target.innerText;

    // if user input available inside challenge
    // positive case ( show hide)
    //or else lose life 

    let match = false;

    for(i=0 ; i<challenge.length;i++){
        console.log(challenge[i]);
        if(user_input == challenge[i]){
            match = true;
            ShowHide(user_input);
        }
    }

    if (match == false ){                //if(!match){} both are same
        LoseLife();
    }

}

function LoseLife(){
    if( lives > 0){
        lives = lives - 1;
    }
      // lives--
      if(lives <= 0){
        lives = 'GAME OVER';
      }
    DisplayLives();
}
function ShowHide(user_input){

    let searchId = user_input + '_id';
    const searchEl = document.getElementById(searchId);
    let charAndDash = searchEl.children;
    charAndDash[0].classList =[];
    charAndDash[1].classList= 'hide';
}

// created buttons with every individual alphabet
//that we rcvd from GeneratingLetters();
function GenerateButtons(){
    let alphabets = GenerateLetters();
    for(let i=0 ; i < alphabets.length ; i++){
        const NewBtn = document.createElement('button');
        NewBtn.addEventListener('click',MatchingAlgo);
        NewBtn.textContent= alphabets[i];
        const letterBoxElement = document.getElementById('letter_box');
        letterBoxElement.appendChild(NewBtn);
    }
}


function main_flow(){
      GenerateButtons();
      GenerateDashes();
      DisplayLives();
}

main_flow();
