

import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

document.getElementById('calculate-button').onclick = (function () {
  document.getElementById("theAnswer").innerHTML = functions.operate();
});

