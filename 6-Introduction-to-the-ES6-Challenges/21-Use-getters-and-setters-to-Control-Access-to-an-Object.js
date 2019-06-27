// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
// Source: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object
// This essentially allows for a user to access an object's properties without directly calling the property like so, Object.property = value;

function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
        constructor(f) {
            this._f = f;
        }
        get temperature() {
            return 5 / 9 * (this._f - 32);
        }
        set temperature(c) {
            this._f = c * 9.0 / 5 + 32;
        }
    }
    /* Alter code above this line */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C