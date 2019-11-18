

const nameInput = document.getElementById('name_input');
const matchValue = 'Xxxx';
nameInput.addEventListener('input', (event) => {
  const currentValue = nameInput.value;
  currentValue !== matchValue ? nameInput.className = 'red' : nameInput.className = '';
});


const url = 'http://any_domain/filter?size=M&color=1,2&manufacturer=aaa,eee';
const domain = 'http://any_domain/';

const sizeInputs = document.getElementsByName("size");
const colorInputs = document.getElementsByName("color");
const manufacturerInput = document.getElementById("manufacturer");

const createUrl = () => {
  
}

window.onload = function() {
    const urlDividerIndex = url.indexOf('?') + 1;
    const filterSlice = url.slice(urlDividerIndex);
    const params = filterSlice.split('&');
    const sizeArray = params[0].split('=');
    const size = sizeArray[1];
    const colorArray = params[1].split('=');
    const color = colorArray[1];
    const colors = color.split(',');
    const manufacturerArray = params[2].split('=');
    const manufacturer = manufacturerArray[1];
    const manufacturers = manufacturer.split(',');

    for(let i = 0; i < sizeInputs.length; i++){
      const sizeInputValue = sizeInputs[i].value;
      sizeInputValue === size ? sizeInputs[i].checked = true : sizeInputs[i].checked = false;
    }

    for(let i = 0; i < colors.length; i++){
      colorInputs[colors[i] - 1].checked = true;
    }

    for(let i = 0; i < manufacturerInput.options.length; i++){
      const manufacturerValue = manufacturerInput.options[i].value;
      for(let j = 0; j < manufacturers.length; j++){
        manufacturers[j] === manufacturerValue ? manufacturerInput.options[i].selected = true : null;
      }
    }
    
    console.log(sizeInputs);
};

for (var i = 0; i<sizeInputs.length; i++) {
  sizeInputs[i].onclick = doSomething;
}

function doSomething() {
  if ( this.checked ) {
    console.log( 'value '+this.value );
  } else {
    console.log( this.value );
  }
}