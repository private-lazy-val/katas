/* Suppose you have an array of string like [ “adios”, “bye”, “ciao” ]. Your task is to write a function called total_characters that accepts such an array as a parameter and returns the summed number of characters across all the strings in the array. */

function totalCharacters(strings) {
  return strings.map((item) => item.length).reduce((previousValue, currentValue) => previousValue + currentValue);
}

console.log(totalCharacters(["Pek", "Polar"])); // 8
