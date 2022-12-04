
var user_size_input = 17
var rainbow = false


//creates the initial grid
changeSize(user_size_input)

//button for changing size 
const btnChangeSize = document.querySelector('#btnChangeSize');
    btnChangeSize.addEventListener('click', getUserInput)

//rainbow button trigger
const rainbowButton = document.querySelector('#btnRainbow');
    rainbowButton.addEventListener('click', () => {
        
        if (rainbow == false) {
            rainbow = true
        }
        
        else if (rainbow == true) {
            rainbow = false 
        }

    });



function getUserInput (){
    user_size_input = prompt("Please enter desired grid size (numbers between 2 and 100)");

    if (user_size_input < 3 || user_size_input > 100) {
        getUserInput();
    }

    
    //we clean the grid first, otherwise it will just add the divs on top of the existing ones
    document.querySelector(('#wholePalette')).innerHTML = "";

    console.log(user_size_input)

    changeSize(user_size_input)

}


function changeSize(requested_size) {
//create 16 x 16 grid of square divs
for (let i = 1; i < requested_size; i++) {

    const i_Divs = []; 
    const k_Divs = [];

    i_Divs[i] = document.createElement('div');
    //set the id of the div to the number of the div
    i_Divs[i].setAttribute('id', `column_no_${i}`); 


    //set style 
    i_Divs[i].setAttribute('style', 'display: flex; flex-direction: column; align-content: stretch; width: 100%; ');    

    const palette = document.querySelector(('#wholePalette'))

    palette.appendChild(i_Divs[i])


    for (let k = 1; k < requested_size; k++) {

        k_Divs[k] = document.createElement('div');
        //set the id of the div to the number of the div
        k_Divs[k].setAttribute('id', `div_no_${(k-1)*16+i}`); 

        //create borders
        k_Divs[k].setAttribute('style', 'border: 1px solid black; height: 100% ;'); 

        //set an attribute that will help us identify these divs when we select them
        k_Divs[k].setAttribute('data-src', ''); 

                //and for each one we add a 'click' listener
                k_Divs[k].addEventListener('mouseover', () => {
                    
                    if (rainbow == true) {
                        let colorR = Math.floor(Math.random() * 256)
                        let colorG = Math.floor(Math.random() * 256)
                        let colorB = Math.floor(Math.random() * 256)

                        //using rgb function in CSS
                        k_Divs[k].style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;

                    }

                    else {

                    k_Divs[k].style.backgroundColor = "black";

                    }   
                });

        i_Divs[i].appendChild(k_Divs[k]); 
    }    

}  


    
}

