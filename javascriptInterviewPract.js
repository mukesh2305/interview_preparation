// 1 =>// hIGHER order function -------------------------------------------------

function callback() {
  console.log("this is callback");
}

function HigherOrder(callback) { // parameter 
  callback();
}

HigherOrder(callback); // argument


// 2 => // clouser ---------------------------------------------------------
let suppose = 10
function name(num) {
  return function value() {  // make value() make clouser with name(){parent} // lexical scope
    console.log(num, suppose)
  }
}

const just = name(5); //return value function inside the just 
just(); // callit call value function


// syncronous nature  //top to bottom nature ------------------------------------------
console.log("I")
console.log("am")
console.log("eating")
console.log("this")

// asyncronuous  ----------------------------------------------
console.log("I")
console.log("am")
setTimeout(function() {
  console.log("eating")
}, 1000);
console.log("this")

// refere Book for javascript arcitucture ----------------------------------------

// Hoisting realted starter
var a ;
function value() {
  let num = 10;
  console.log("print this", num)
}
value();

let b = function () {
  console.log("also this ")
}
b();

a = 10;

// iligal shadowing we can not decare let and const variable two time using other variable like let, var, const ---------------------------------------------
let a = 15;
{
  var a = 10;
  console.log("inner", a)
}

console.log("outside", a)


// --------------------------------------------------------------------------

let a = 15;
{
  let a = 10;
  console.log("inner", a)
}

console.log("outside", a)

// Output :
// inner 10
// outside 15

// callBack Hell => reoleve using promise ---------------------------------------------
first(2, function(firstValue , err ) {
  if(!err) {
    two(firstValue, function(secondValue , err) {
      if(!err) {
        three(secondValue, function(thirdValue , err){
          console.log(thirdValue)
        })
      }
    })
  }
})



function first(value, callback) {
  callback(value + 1, false);
} 
function two(value, callback) {
  callback(value + 1, false);
} 
function three(value, callback) {
  callback(value + 1, false);
} 

//  promise is used for resolving and simplifying code callback hell problem ---------------------------------------------------------
function first(value) {
  return value +1
} 
function two(value) {
  return value +1
} 
function three(value) {
  return value +1
} 

let promise = new Promise((resolve, reject) => {
  resolve(2);
})


promise.then(first).then(two).then(three).then(res => console.log(res))


// Promise.all ------------------------------------------------------------------
let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
        }, 2000);
    });
    
   

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
        }, 2000);
    });

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
        }, 2000);
    });

    Promise.all([p1, p2, p3]).then(response => console.log(response));

  // async await ---------------------------------------------------------------------
  async function value() {
  console.log("I");
  await console.log("am");
  console.log("this");
}
value();

(function() {
  console.log("after")
})();

// //  apply , call , bind method ---------------------------------------------------------------------

let obj1 = {
  name : "mukesh", 
  print : function(surname)  {
    console.log(this.name + " " + surname);
  }
}

obj1.print("purohit");


let obj2 = {
  name : "jaydeep"
}

obj1.print.call(obj2, "ram") // call
obj1.print.apply(obj2,[ "ram"]) // apply

let just = obj1.print.bind(obj2) // bind 
just("ram")

// map reduce filter ------------------------------------------------------------------
const value = [1, 2, 3, 4, 5];
var suppose = value.map(item => item) // retuen array
console.log(suppose)

var suppose = value.filter(item => item > 3) //rrturn array
console.log(suppose)

var suppose = value.reduce((acc, cur) => { //return single value 
  acc = acc + cur;
  return acc;
}, 0) 
console.log(suppose)
