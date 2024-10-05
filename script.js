
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

// Trampolined version of the flatten function

const flattenArrayTrampolined = (arr, acc = []) => {
  return () => arr.reduce((acc, val) => {
    if(Array.isArray(val)) {
      return flattenArrayTrampolined(val, acc)();
    }else{
      return acc.concat(val);
    }
  }, acc);
};

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
// // Once complete, use the alert() method to alert the user that the calculation is finished.

 const h1 = document.querySelector('h1');
// const paragraph = document.createElement('p');
// paragraph.textContent = 'My Paragraph';

// h1.appendChild(paragraph);

// // Function to check if a number is a prime

// const isPrime = (num) => {
//   if(num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// // Function to add a list of prime numbers between 1 and n to the HTML element 
// const addPrimeToContainer = (n) => {
//   // Clear the paragraph before adding new numbers
//   paragraph.innerHTML = '';

//   // Generate prime numbers and add them to the paragraph
//   let primeList = '';
//   for(let i = 1; i <= n; i++){
//     if (isPrime(i)) {
//       primeList += `${i}, `;
//     }
//   }

//   // Remove the trailing comma and space

//   primeList = primeList.slice(0, -2);
//   //Add prime numbers to the HTML element 
//   paragraph.textContent = `Prime numbers between 1 and ${n}: ${primeList}`;

//   //Alert the user that the calculation is finished 
//   alert('Prime number calculation complete!');
// };

// addPrimeToContainer(10000);



// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to render prime numbers between 1 and n
function renderPrimes(n) {
  const container = document.getElementById('prime-container');
  let currentNumber = 1;

  function renderNextPrime() {
    if (currentNumber <= n) {
      if (isPrime(currentNumber)) {
        const primeElement = document.createElement('p');
        primeElement.textContent = currentNumber;
        container.appendChild(primeElement);
      }
      currentNumber++;

      // Use setTimeout to allow the UI to update
      setTimeout(renderNextPrime, 0);
    } else {
      // Once all numbers are processed, show an alert
      alert('Prime number calculation completed!');
    }
  }

  // Start rendering the primes
  renderNextPrime();
}

// Call the function with the value you want (for example, 100)
renderPrimes(10000);

