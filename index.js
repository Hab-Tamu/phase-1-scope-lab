// Write your solution in this file!
//

var customerName = "bob"

function upperCaseCustomerName(){
  customerName = customerName
function f() {
     return customerName.toUpperCase()
  }
 return f
}
console.log(upperCaseCustomerName()())

function setBestCustomer(){
    var bestCustomer
    {
     bestCustomer = "not bob"
    }
    return bestCustomer
}

console.log(setBestCustomer())

// function setBestCustomer(){
//     function f() {
//         return setBestCustomer = "not bob"
//     }
//     return f
// }
// console.log(setBestCustomer()())


// const myVar = "Foo";

// function first() {
//   console.log("Inside first()");

//   console.log("myVar is currently equal to:", myVar);
// }

// function second() {
//   const myVar = "Bar";

//   first();
// }

// second()

var upperCaseCustomerName = function(){
    var customerName = "bob"
    return customerName.toUpperCase()

}
console.log(upperCaseCustomerName())