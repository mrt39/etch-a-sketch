
//create 16 x 16 grid of square divs
for (let i = 1; i < 17; i++) {

    const i_Divs = []; 
    const k_Divs = [];

    i_Divs[i] = document.createElement('div');
    //set the id of the div to the number of the div
    i_Divs[i].setAttribute('id', `column_no_${i}`); 
    //i_Divs[i].innerHTML =  `Column no: ${i}`

    //create borders
    //i_Divs[i].setAttribute('style', 'width: 100%; height: 100%;'); 
    //i_Divs[i].setAttribute('style', 'overflow: hidden; background-size: cover;');
    i_Divs[i].setAttribute('style', 'color: blue; border: 1px solid black; width: 100%; ');    

    const palette = document.querySelector(('#wholePalette'))

    palette.appendChild(i_Divs[i])


 /*   for (let k = 1; k < 17; k++) {

        k_Divs[k] = document.createElement('div');
        //set the id of the div to the number of the div
        k_Divs[k].setAttribute('id', `div_no_${(k-1)*16+i}`); 
        //k_Divs[k].innerHTML =  `${(k-1)*16+i}`;

        //create borders
        k_Divs[k].setAttribute('style', 'color: blue; border: 1px solid black; '); 

        i_Divs[i].appendChild(k_Divs[k]); 
    }    */

  }  

  var user_size_input = 16

  const btnChangeSize = document.querySelector('#btnChangeSize');
    btnChangeSize.addEventListener('click', () => {
    
    user_size_input = prompt("Please enter desired grid size (numbers between 1 and 100)");

    console.log(user_size_input)
});



/*  function changeSize(playerchoice) {
    // let playerchoice = prompt("Rock, paper or scissors?").toUpperCase();
    
        if (playerchoice == "ROCK" || playerchoice == "PAPER" || playerchoice == "SCISSORS" ) {
            return playerchoice
          }
          //turn back and prompt the user again if the input isn't valid
        else {
            return getPlayerChoice()
        }  
     }

     */