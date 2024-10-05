
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
