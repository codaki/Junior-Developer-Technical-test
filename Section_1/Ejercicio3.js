// 3. Sum of Unique Elements (Lists and Sets)
// Given a list of integers, write a function that returns the sum of all unique elements (i.e., elements that appear only once in the list).
// Function Signature:
// def sum_of_unique_elements(nums: list[int]) -> int:
// pass
// Example:
// print(sum_of_unique_elements([1, 2, 3, 2, 4])) # 8
// print(sum_of_unique_elements([5, 5, 5, 5, 5])) # 0

function sum_of_unique_elements(nums) {
  // creo un set para mapear los elementos y su frecuencia
  const frequencia = {};

  //recorro la lista y guardo la frecuencia
  for (const num of nums) {
    if (frequencia[num]) {
      frequencia[num]++;
    } else {
      frequencia[num] = 1;
    }
  }

  let sum = 0;
  //recorro el set y sumo las keys con valores 1
  for (const num in frequencia) {
    if (frequencia[num] === 1) {
      sum += parseInt(num);
    }
  }
  //devuelvo la suma
  return sum;
}
console.log(sum_of_unique_elements([1, 2, 3, 2, 4])); // 8
console.log(sum_of_unique_elements([5, 5, 5, 5, 5])); // 0
console.log(sum_of_unique_elements([1, 2, 3, 4, 5])); // 15
console.log(sum_of_unique_elements([18, -10, 1, 4, 5, 1])); // 17
