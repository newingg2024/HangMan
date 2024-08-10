function GenerateLetters(){

    let letterBox =[];
    for(i = 65 ; i <= 90 ;i++){
        letterBox.push(String.fromCharCode(i));
        
    }
    return letterBox;
}
function GenerateDashes(){
    let dash_line =[];
    let challenge = "MANCHESTER";
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

        letterDiv.appendChild(charDiv);
        letterDiv.appendChild(dashDiv);


    }
    
    for(let i=0;i<=8;i++){

        dash_line.push('_');
        dash_line.textContent= dash_line;
        console.log(dash_line);
    }
    return dash_line;
}

// created buttons with every individual alphabet
//that we rcvd from GeneratingLetters();
function GenerateButtons(){
    let alphabets = GenerateLetters();
    for(let i=0 ; i < alphabets.length ; i++){
        const NewBtn = document.createElement('button');
        NewBtn.textContent= alphabets[i];
        const letterBoxElement = document.getElementById('letter_box');
        letterBoxElement.appendChild(NewBtn);
    }
}


function main_flow(){
      GenerateButtons();
      GenerateDashes();
}

main_flow();
