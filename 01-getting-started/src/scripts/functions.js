// Khush Brar
// COMP 100C
let goodArray = [];

const provinces = {
    AB:'Alberta',
    BC:'British Columbia',
    MB:'Manitoba',
    NB:'New Brunswick',
    NL:'Newfoundland and Labrador',
    NS:'Nova Scotia',
    ON:'Ontario',
    PEI:'Prince Edward Island',
    QB:'Quebec',
    SK:'Saskatchewan'
};

const functions = {

    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 101) return "large";
        return "extra large";
    },
    // For the Calculator portion
    add: (number1, number2) => number1 + number2,

    subtract: (number1, number2,) => number1 - number2,

    multiply: (number1, number2) => number1 * number2,

    divide: (number1, number2) => number1 / number2,

    operate: () => {
        let calculated = 0;
        console.log(`'hey now' from operate()`);
        let number1 = parseInt(document.getElementById('number1').value);
        let number2 = parseInt(document.getElementById('number2').value);
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
            return `YOU BLEW IT!, do some arithmetic`;
            }
        },
    // For the Tax Calculator portion
    taxCalc: () => {
        let netIncome = parseInt(document.getElementById('netIncome').value);
        let tax = 0;
        const bracket1 = 48535;
        const bracket2 = 97069;
        const bracket3 = 150473;
        const bracket4 = 214368;
        const taxRate1 = .15;
        const taxRate2 = .205;
        const taxRate3 = .26;
        const taxRate4 = .29;
        const taxRate5 = .33;

        if (netIncome <= bracket1) {
            tax = netIncome * taxRate1;
            return tax;
        }else if (netIncome > bracket1 && netIncome <=bracket2) {
            tax = ((netIncome - bracket1) * taxRate2) + (bracket1 * taxRate1);
            return tax;
        }else if (netIncome > bracket2 && netIncome <=bracket3) {
            tax = ((netIncome - bracket2) * taxRate3) + ((bracket1 * taxRate1) + ((bracket2-bracket1) * taxRate2));
            return tax;
        }else if (netIncome > bracket3 && netIncome <=bracket4) {
            tax = ((netIncome - bracket3) * taxRate4) + ((bracket1 * taxRate1) + ((bracket2-bracket1) * taxRate2) +
              ((bracket3 - bracket2) * taxRate3));
            return tax;
        }else if (netIncome > bracket4) {
            tax = ((netIncome - bracket4) * taxRate5) + ((bracket1 * taxRate1) + ((bracket2-bracket1) * taxRate2) +
              ((bracket3 - bracket2) * taxRate3) + ((bracket4 - bracket3) * taxRate4));
            return tax;
        }
    },
//button “Add” - will add the input field to an array that you define in JavaScript if it is a number.  It will show a
// message in the message area saying that the number has been added to the array. If the input is not a number it will
// display a message saying that the input is not a valid number.
    addArray: () => {
        // let goodArray = []; This is not the way to do it. See line 3 for the global goodArray
        let userNumber = parseInt(document.getElementById('userNumber').value);
        if (isNaN(userNumber)) {
            return `Your input is not a valid number`;
        }else {
            goodArray.push(userNumber);
            return `${userNumber} has been added to the array. Your Welcome`
        }
    },

    clearArray: () => {
        goodArray = [];
        document.getElementById('userNumber').value = '';
        return `The array has been reset`
    },

    showArray: () => {
        return goodArray.toString();
    },
    // I don't quite get how reduce works yet
    totalArray: () => {
      return goodArray.reduce((a, b) => a + b, 0);
    },

    lookup: () => {
      let lookupSearch = document.getElementById('lookup').value;
      lookupSearch = lookupSearch.toUpperCase();

      for (let [key, value] of Object.entries(provinces)) {
          if (key === lookupSearch) {
              return value;
          }
      }
      for (let [key, value] of Object.entries(provinces)) {
          if (key != lookupSearch) {
              return `Not a valid abbreviation`;
          }
        }
      }
};

export default functions;

