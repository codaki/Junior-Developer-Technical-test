// 2. Palindrome Checker (String Manipulation)
// Write a function that checks if a given word is a palindrome. A palindrome is a word that reads the
// same backward as forward (e.g., "radar", "level"). The function should ignore case and spaces.
// Function Signature:
// def is_palindrome(word: str) -> bool:
// pass
// Example:
// print(is_palindrome("Radar")) # True
// print(is_palindrome("Hello")) # False
// print(is_palindrome("A man a plan a canal Panama")) # True

//forma con funciones de javascript
function is_palindrome(string) {
  // Unificar la cadena a minúsculas y eliminar espacios
  const stringMinuscula = string.toLowerCase();
  const stringUnido = stringMinuscula.replace(/\s+/g, "");

  // devuelvo el resultado de la comparación normal e invertida
  return stringUnido === stringUnido.split("").reverse().join("");
}

console.log(is_palindrome("Radar")); // True
console.log(is_palindrome("Hello")); // False
console.log(is_palindrome("A man a plan a canal Panama")); // True

//forma con estructuras de control
function is_palindrome2(string) {
  // Unificar la cadena a minúsculas y eliminar espacios
  const stringMinuscula = string.toLowerCase();
  const stringUnido = stringMinuscula.replace(/\s+/g, "");

  let esPalindromo = true;
  //Recorro la cadena y compara los caracteres de los extremos hacia el centro
  for (let i = 0; i < stringUnido.length / 2; i++) {
    if (stringUnido[i] !== stringUnido[stringUnido.length - 1 - i]) {
      esPalindromo = false;
      break;
    }
  }
  return esPalindromo;
}
console.log(is_palindrome2("Radar")); // True
console.log(is_palindrome2("Hello")); // False
console.log(is_palindrome2("A man a plan a canal Panama")); // True
