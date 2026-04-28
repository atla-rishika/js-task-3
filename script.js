//Task-1 : Student Form Function

function studentForm(name, age, course) {
 console.log("Name:", name);
 console.log("Age:", age);
 console.log("Course:", course);
}

studentForm("Naveen", 22, "MERN");

//Task-2: Calculator Function

function calc(a, b) {
 console.log("Addition:", a + b);
 console.log("Subtraction:", a - b);
 console.log("Multiplication:", a * b);
}

calc(10, 5);
// OUTPUT : Addition: 15  Subtraction: 5  Multiplication: 50

//Task-3: Reusable Greeting

function greet(user) {
 console.log("Hello " + user);
}

greet("Kamal");
greet("Praveen");
greet("Sai");
//OUTPUT : Hello Kamal, Hello Praveen, Hello sai

//Task-4: Return Value

function square(num) {
 return num * num;
}

console.log(square(5));
//OUTPUT : 25

//Task-5: Scope Check

function testScope() {
 let secret = "javascript";
 console.log(secret); // When variable let used inside working
}

//testScope();  console.log(secret);
//when variable decleared let inside a function are block-scoped. They cannot be accessed outside the function.

//Task-6: Merge Arrays

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let combined = [...boys, ...girls];
console.log(combined); 
//OUTPUT : ["car","bike","doll","teddy"]

//Task-7: Unlimited Numbers


function sumAll(...nums) {
 return nums.reduce((total, n) => total + n, 0);
}

console.log(sumAll(10, 20, 30, 40));
//OUTPUT :100

//Task-8: Array Destructuring

let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;

console.log(c1, c2, c3); 
//OUTPUT : red green blue

//Task-9: Object Destructuring

let emp = {
 name: "Naveen",
 role: "Developer",
 salary: "5LPA"
};

let { name, role } = emp;
console.log(name, role);
//OUTPUT : Naveen Developer

//Task-10: Offer Generator

function* offerGenerator() {
 yield "10% cashback";
 yield "20% cashback";
 yield "50% cashback";
 yield "Try again";
 return "No more offers";
}

let offers = offerGenerator();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

//OUTPUT : 10% cashback ,20% cashback,50% cashback, Try again, No more offers

//Task-11: Curry Function

function add(a) {
 return function(b) {
   return function(c) {
     return a + b + c;
   };
 };
}

console.log(add(10)(20)(30));

//OUTPUT : 60

//Task 12: Student Marks Analyzer

function marks(...nums) {
 let total = nums.reduce((sum, n) => sum + n, 0);
 let avg = total / nums.length;
 console.log("Total =", total);
 console.log("Average =", avg);
}

marks(80, 90, 70, 60); 

//OUTPUT : Total = 300, Average = 75

//Challenge Task (Real Company Level)


function register(name, role, ...skills) {
 console.log("Name:", name);
 console.log("Role:", role);
 console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");
//OUTPUT : Name: Naveen, Role: Frontend, Skills: HTML CSS JS React