// 

console.log(5 > 4); // true
console.log(5 < 4); // false

console.log(3 >= 4); // false
console.log(3 >= 3); // true


console.log(10 <= 44); // true

console.log(100 == 100);
console.log(100 == 10);

// ===================================
// (==) type conversion
console.log(3 == "3"); // true

// (===) No type conversion [check for value and data type]
console.log(3 === "3"); // false

//
console.log(10 != 100); // true
console.log(10 != 10); // false

// (!=) type conversion
console.log(10 != "10"); // false

// (!==) No type conversion
console.log(10 !== "10"); // true

console.log(3 + 3); // 6
console.log(3 + "3"); // "33"
console.log("6" + 6); // "66"
console.log("hello" + "world"); // "helloworld"

//
let result = 3 + 3;

console.log(result);


let accountBalance = 100

let price = 10

let purchaseValid = price < accountBalance;

if (purchaseValid) {
    // alert("thanks for your purchase")
}

console.log(purchaseValid);



// Logical Operators
// (&&) -> and
// (||) -> or
// (!) -> negates


// (&&) -> and
let thisLogic = 3 > 2 && 6 === 6;
 
thisLogic = 3 > 4 && 6 === 6;

thisLogic = 3 > 2 && 6 === 3;

console.log("===> ", thisLogic);

//===
// (||) -> or
let res = 3 > 2 || 6 === 6;

res = 3 > 5 || 6 === 6;

console.log("RES ==> ", res);


// (!) -> negates
let res2 = !(3 > 2 && 6 === 6);

console.log("Negates ==>", res2);
 
 
// String concatenation
let message = "Hello JS!"

let longMessage = "Hello" +  " " + "World!" + "!!! " + message;

console.log(longMessage);

console.log("Error in line " + 5);


// NaN -> not a number
console.log("Hello" - "JS");



//

const userName = "Inigo Montoya";

userName[5] = "X"
console.log(userName[5])

console.log(userName);


console.log(userName.length); // length 13

console.log(userName[0]);
console.log("Hello World!"[6]);



// Comparing Strings

console.log("a" < "b");

console.log("hey" === "hey"); // true
console.log("Hey" === "Hey"); // true

console.log("Hey" === "hey"); // false

let password = "Password123$"; // on the db
// let userPassword = prompt("Enter your password")

// if (password === userPassword) {
//     console.log("Welcome");
// } else {
//     console.log("Wrong password!");
// }


console.log("Hey" < "hey");


const frost =
`Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost);

const msg = "\tNature’s first green is gold,\nHer hardest hue to hold.\nHer early leaf’s a flower;"
console.log(msg);


// Template Literals
let user2 = "Max Pain";
console.log(`Welcome ${user2}: ${3 + 3}: ${30 > 1}`);

let user3 = "Tom"


const a = 5;
const b = 10;

console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
Therefore, 'a' plus 'b' is equal to ${a + b}.`);