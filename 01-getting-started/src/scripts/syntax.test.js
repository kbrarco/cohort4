// Khush Brar
// COMP 100C

import khushFunctions from "./syntax";

test('are our arrow function expressions working?', () => {
  expect(khushFunctions.isItNumber("Khush")).toBe(false);
  expect(khushFunctions.isItNumber(53)).toBe(true);

  expect(khushFunctions.isItString(88)).toBe(false);
  expect(khushFunctions.isItString('Khush')).toBe(true);

  expect(khushFunctions.isItBoolean('Khush')).toBe(false);
  expect(khushFunctions.isItBoolean(true, false)).toBe(true);

  expect(khushFunctions.isItArray(![])).toBe(false);
  expect(khushFunctions.isItArray([])).toBe(true);

  expect(khushFunctions.isItObject(!{})).toBe(false);
  expect(khushFunctions.isItObject({})).toBe(true);

  expect(khushFunctions.isItUndefined(!undefined)).toBe(false);
  expect(khushFunctions.isItUndefined(undefined)).toBe(true);


  expect(khushFunctions.arrayUnshift(35)).toBeGreaterThan(khushFunctions.khushArray.length - 1);
  expect(khushFunctions.arrayUnshift()).toEqual((khushFunctions.khushArray.length));

  expect(khushFunctions.arrayPush('YabaZabaTurduckin')).toBeGreaterThan(khushFunctions.khushArray.length - 1);
  expect(khushFunctions.arrayPush()).toEqual((khushFunctions.khushArray.length));

  expect(khushFunctions.arrayDoAnything()).toBe(khushFunctions.khushArray.length);

  expect(khushFunctions.cube(3)).toEqual(27);
});
