/**
 * 1. Constraints
 *  > todos os numeros passados como parametros sao positivos,
 *    ou podem ser negativos tambem ?
 *      (isso pode mudar o comportamento da implementacao)
 *
 *  > Podem existir numeros duplicados ? (nao)
 *  > Sempre havera uma solucao ?
 *    > O que retornar se nao houver uma solucao ? (null)
 *  > Podem existir mais de um par para definir o target ? (nao)
 *
 *
 * 2. Escrever test cases
 *  > Melhor cenario
 *    [1, 3, 7, 9, 2] -> t = 11, r = [3, 4]
 *    [1, 3, 7, 9, 2] -> t = 25, r = null
 *    [] -> t = 1, r = null
 *    [5] -> t = 5, r = null
 *    [1, 6] -> t = 7, r = [0, 1] // solucao obvia (comecar por ela ?)
 *
 * 3. Descobrir uma solucao sem escrever codigo
 *    > comecar com a solucao mais simples.
 *      testar todas as combinacoes
 *
 */

/**
 * Polynomial
 * O(log n) - Logarithmic
 * O(n) - Linear
 * O(n log n) - Linearithmic
 * O(n^2) - Quadratic
 * O(n^3) - Cubic
 *
 * Exponential
 * O(2^n) - Exponential
 * O(!n) - Factorial
 * O(n^n) - Exponential
 */

// T -> O(n^2) - operations -> for...
// S -> O(1) - variables saved -> const
function findTwoSumDefault(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) { // T - O(N)
    const numberToFind = target - nums[p1] // S - O(1)

    for (let p2 = p1 + 1; p2 < nums.length; p2++) { // T - O(N)
      if (numberToFind == nums[p2]) {
        return [p1, p2]
      }
    }
  }

  return null
}

console.log(findTwoSumDefault([1, 3, 7, 9, 2], 11))
console.log(findTwoSumDefault([1, 3, 7, 9, 2], 25))
console.log(findTwoSumDefault([], 1))
console.log(findTwoSumDefault([5], 5))
console.log(findTwoSumDefault([1, 6], 7))


// T -> O(n)
// S -> O(n)
function findTwoSumOptimal(nums, target) {
  const numsMap = {} // S -> O(n)

  for (let p = 0; p < nums.length; p++) { // T -> O(n)
    const currentMapVal = numsMap[nums[p]] // S -> O(1)

    if (currentMapVal >= 0) {
      return [currentMapVal, p]
    }

    const numberToFind = target - nums[p]
    numsMap[numberToFind] = p
  }

  return null
}

console.log(findTwoSumOptimal([1, 3, 7, 9, 2], 11))
console.log(findTwoSumOptimal([1, 3, 7, 9, 2], 25))
console.log(findTwoSumOptimal([], 1))
console.log(findTwoSumOptimal([5], 5))
console.log(findTwoSumOptimal([1, 6], 7))
