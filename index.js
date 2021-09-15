// Add your functions here
// const mapNegative = function(input) {
// 	return input * -1
// }

function map(array, func) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }
  return result;
}

function reduce(array, callback, start) {
  let memo;
  // start ? (memo = start) : (memo = 0);

  if (start) {
    memo = start;
    for (let i = 0; i < array.length; i++) {
      memo = callback(array[i], memo);
    }
  } else {
    memo = array[0];
    for (let i = 1; i < array.length; i++) {
      memo = callback(array[i], memo);
    }
  }
  return memo;
}
