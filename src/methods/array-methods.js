// lös uppgifterna med olika arraymetoder. titta på förväntat testresultat om du behöver ledtrådar

export const reverseArray = (array) => {
  const copy = [...array];
  return copy.reverse();
};
let numOfReverseArray = reverseArray.length;
console.log(reverseArray(["Dog", "Cat", "Meow"]));
console.log(numOfReverseArray);

// export function removeAppleFromArray() {
//   // Använder .splice() metod, använda för att ta bort eller lägga till element i en array
//   const array = ["apple", "banana", "cherry"];
//   array.splice(0, 1);
//   return array;
// }
// console.log(removeAppleFromArray());

// export function removeFiveFroremmArray() {
//   // Använder .splice() metod, använda för att ta bort eller lägga till element i en array
//   const array = [1, 2, 3, 4, 5];
//   array.splice(4, 1);
//   return array;
// }
// console.log(removeFiveFroremmArray());

// export const getFirstElement = (array) => {
//   const copy = [...array];
//   return copy.shift();
// };
// console.log(getFirstElement(["mi", "bombo", "clart"]));

// export const getLastElement = (array) => {
//   const copy = [...array];
//   return copy.pop();
// };
// console.log(getLastElement(["Sonic", "Shadow", "Silver"]));

// export const removeMiddleItem = () => {
//   const array = [1, 2, 3, 4, 5];
//   array.splice(2, 1);
//   return array;
// };
// console.log(removeMiddleItem());

// // en blandning av sträng- och array-metoder
// export const reverseString = (string) => {};

// // kan kräva higher order functions
// export const sumNumbers = (array) => {};
