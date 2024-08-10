function GenerateLetters(){

    let letterBox =[];
    for(i = 65 ; i <= 90 ;i++){
        letterBox.push(String.fromCharCode(i));
        
    }
    return letterBox;
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
//to keep the code clean.
function main_flow(){
    GenerateButtons();

}
main_flow();
