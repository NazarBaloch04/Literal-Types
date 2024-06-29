// A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.


// There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

// Literal Narrowing
// When you declare a variable via var or let, you are telling the compiler that there is the chance that this variable will change its contents. In contrast, using const to declare a variable will inform TypeScript that this object will never change.

// We're making a guarantee that this variable
// helloWorld will never change, by using const.
 
// So, TypeScript sets the type to be "Hello World", not string
const helloWorld = "Hello World";
 
// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";
// Try
// The process of going from an infinite number of potential cases (there is an infinite number of possible string values) to a smaller, finite number of potential case (in helloWorld’s case: 1) is called narrowing.

// String Literal Types
// In practice string literal types combine nicely with union types, type guards, and type aliases. You can use these features together to get enum-like behavior with strings.

type GuessingGirl = "ease-in" | "ease-out" | "ease-in-out";
 
class GirlBeauty {
  animate(dx: number, dy: number, easing: GuessingGirl) {
    if (easing === "ease-in") {
      console.log("She looks pretty");
      
    } else if (easing === "ease-out") {
        console.log("She is daughter of Zubair");
        
    } else if (easing === "ease-in-out") {
        console.log("She is wife of Shoaib");
        
    } else {
        console.log("Let he to go in hell");
    }
  }
}
 
let button = new GirlBeauty();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); error


// Argument of type '"uneasy"' is not assignable to parameter of type 'Easing'.
// Try
// You can pass any of the three allowed strings, but any other string will give the error

// Argument of type '"uneasy"' is not assignable to parameter of type '"ease-in" | "ease-out" | "ease-in-out"'
// String literal types can be used in the same way to distinguish overloads:


// Numeric Literal Types
// TypeScript also has numeric literal types, which act the same as the string literals above.

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}
 
const result = rollDice();
console.log(result);

// Try
// A common case for their use is for describing config values:

interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}
type setUp  = MapConfig

const Result: setUp ={
    lng: 123,
    lat:78,
    tileSize: 16
}
console.log(Result);



 

// Try
// Boolean Literal Types
// TypeScript also has boolean literal types. You might use these to constrain object values whose properties are interrelated.

interface ValidationSuccess {
  isValid: true;
  reason: null;
}
 
interface ValidationFailure {
  isValid: false;
  reason: string;
}
 
type ValidationResult = ValidationSuccess | ValidationFailure;
const successResult: ValidationResult = {
    isValid: true,
    reason: null
}
const failureResult: ValidationResult = {
    isValid: false,
    reason: "Failed due to skipping Questions"
}
console.log(successResult);
console.log(failureResult);




