// Khush Brar
// COMP 100C
const functions = {

    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 101) return "large";
        return "extra large";
    },

    add: (number1, number2) => number1 + number2,

    subtract: (number1, number2,) => number1 - number2,

    multiply: (number1, number2) => number1 * number2,

    divide: (number1, number2) => number1 / number2,

    operate: () => {
        let calculated = 0;
        let number1 = parseInt(document.getElementById('number1').value);
        let number2 = parseInt(document.getElementById('number2').value);
        console.log(`'hey now' from operate()`);
        if(document.getElementById('sum').checked) {
            calculated = functions.add(number1, number2);
            return calculated;
        }else if (document.getElementById('subtract').checked) {
            calculated = functions.subtract(number1, number2);
            return calculated;
        }else if (document.getElementById('multiply').checked) {
            calculated = functions.multiply(number1, number2);
            return calculated;
        }else if (document.getElementById('divide').checked) {
            calculated = functions.divide(number1, number2);
            return calculated;
        }else {
            console.log(`nothing happened`);
            }
        }

    };

export default functions;

