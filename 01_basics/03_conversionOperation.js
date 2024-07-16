let score = "45ab"

console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// 33 -> 33
// "33" -> 33
// "33ab" -> NaN
// null -> 0
// undefined -> NaN
// 1 -> true, 0 false (for Boolean() method)
// "" -> false (for Boolean() method)
// "hi" -> true (for Boolean() method)
