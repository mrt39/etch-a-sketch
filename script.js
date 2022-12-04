
  var user_size_input = 16

  changeSize(user_size_input)

  //change size button 
  const btnChangeSize = document.querySelector('#btnChangeSize');
    btnChangeSize.addEventListener('click', () => {
    
    user_size_input = prompt("Please enter desired grid size (numbers between 1 and 100)");

    //we clean the grid first, otherwise it will just add the divs on top of the existing ones
    document.querySelector(('#wholePalette')).innerHTML = "";

    console.log(user_size_input)

    changeSize(user_size_input)
});



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
        k_Divs[k].setAttribute('style', 'border: 1px solid black; height: 100% '); 

        i_Divs[i].appendChild(k_Divs[k]); 
    }    

}  


    
}

     