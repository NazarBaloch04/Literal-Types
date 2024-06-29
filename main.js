"use strict";
// A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.
Object.defineProperty(exports, "__esModule", { value: true });
// There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.
// Literal Narrowing
// When you declare a variable via var or let, you are telling the compiler that there is the chance that this variable will change its contents. In contrast, using const to declare a variable will inform TypeScript that this object will never change.
// We're making a guarantee that this variable
// helloWorld will never change, by using const.
// So, TypeScript sets the type to be "Hello World", not string
var helloWorld = "Hello World";
// On the other hand, a let can change, and so the compiler declares it a string
var hiWorld = "Hi World";
var GirlBeauty = /** @class */ (function () {
    function GirlBeauty() {
    }
    GirlBeauty.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            console.log("She looks pretty");
        }
        else if (easing === "ease-out") {
            console.log("She is daughter of Zubair");
        }
        else if (easing === "ease-in-out") {
            console.log("She is wife of Shoaib");
        }
        else {
            console.log("Let he to go in hell");
        }
    };
    return GirlBeauty;
}());
var button = new GirlBeauty();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); error
// Argument of type '"uneasy"' is not assignable to parameter of type 'Easing'.
// Try
// You can pass any of the three allowed strings, but any other string will give the error
// Argument of type '"uneasy"' is not assignable to parameter of type '"ease-in" | "ease-out" | "ease-in-out"'
// String literal types can be used in the same way to distinguish overloads:
// Numeric Literal Types
// TypeScript also has numeric literal types, which act the same as the string literals above.
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollDice();
console.log(result);
var Result = {
    lng: 123,
    lat: 78,
    tileSize: 16
};
console.log(Result);
var successResult = {
    isValid: true,
    reason: null
};
var failureResult = {
    isValid: false,
    reason: "Failed due to skipping Questions"
};
console.log(successResult);
console.log(failureResult);
