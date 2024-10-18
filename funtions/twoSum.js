function twoSum(nums, target) {
  var numMap = {}; // Mapa para almacenar números y sus índices
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i]; // Calcular el complemento
    if (numMap[complement] !== undefined) {
      // Comprobar si el complemento ya se ha visto
      return [numMap[complement], i]; // Retornar los índices del complemento y del número actual
    }
    numMap[nums[i]] = i; // Almacenar el número actual y su índice
  }
  return null; // Retorna null si no se encuentra la solución
}

target = 9;
nums = [1, 7, 11, 8];
// Ejemplo de uso
console.log(twoSum(nums, target)); // Salida: [0, 1]
    