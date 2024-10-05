
// Declare a global counter variable.

let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
function recursiveCalls(){
  counter ++;
  recursiveCalls();
}

try {
  recursiveCalls()
} catch(error) {
  console.log("Stack overflow error caught!");
  console.log("number of recursive calls made: " + counter);
  console.log("Error details: ", error.message);
}

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

const flattenArray = (arr) => {
  return arr.reduce((acc, val) => {
    if(Array.isArray(val)){
      // If the value is an array, recursively flatten it
      return acc.concat(flattenArray(val));
    }else {
      // If it's not an array, just add it to the accumulator
      return acc.concat(val);
    }
  }, []);
};

