

import functions from './functions.js';

// **********
//
// Add the event listeners
//


idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
// Calculator button
document.getElementById('calculate-button').onclick = (function () {
  document.getElementById("theAnswer").innerHTML = functions.operate();
});
// Tax Button
document.getElementById('calculate-tax').onclick = (function () {
  document.getElementById('taxAnswer').innerHTML = functions.taxCalc();
});
// Array Add Button
document.getElementById('Add').onclick = (function () {
  document.getElementById('array-message').innerHTML = functions.addArray();
});
// Array Show Button
document.getElementById('Show').onclick = (function () {
  document.getElementById('array-message').innerHTML = functions.showArray();
});
// Array Total Button
document.getElementById('Total').onclick = (function () {
  document.getElementById('array-message').innerHTML = functions.totalArray();
});
// Array Clear Button
document.getElementById('Clear').onclick = (function () {
  document.getElementById('array-message').innerHTML = functions.clearArray();
});

document.getElementById('lookup-button').onclick = (function () {
  document.getElementById('lookup-message').innerHTML = functions.lookup();
});



// calculate-tax.addEventListener('click', (() => {
//   document.getElementById('taxAnswer').innerHTML = functions.taxCalc();
// }));
