
//create 16 x 16 grid of square divs
for (let i = 1; i < 17; i++) {

    const i_Divs = []; 
    const k_Divs = [];

    i_Divs[i] = document.createElement('div');
    //set the id of the div to the number of the div
    i_Divs[i].setAttribute('id', `div_no_${i}`); 
    i_Divs[i].innerHTML =  `${i}`

    const palette = document.querySelector(('#wholePalette'))
    palette.appendChild(i_Divs[i])                     

    for (let k = 1; k < 16; k++) {

        k_Divs[k] = document.createElement('div');
        //set the id of the div to the number of the div
        k_Divs[k].setAttribute('id', `div_no_${k*16+i}`); 
        k_Divs[k].innerHTML =  `${k*16+i}`;

        i_Divs[i].appendChild(k_Divs[k]); 
    }    

  }
