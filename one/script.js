function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

var x = 10;
var y = 20;

function add() {
  document.getElementById("demo").innerHTML = x + y;
}

function subtract() {
  document.getElementById("demo").innerHTML = x - y;
}

function adds(a, b) {
  document.getElementById("demo").innerHTML = a + b;
}
function toCelsius(f) {
  document.getElementById("demo2").innerHTML = (5 / 9) * (f - 32);
}
// objects
const car1 = {
  type: "Fiat",
  model: "500",
  color: "white",
};

const car2 = {};

car2.type = "Volvo";
car2.model = "XC90";
car2.color = "black";

const car3 = {
  type: "BMW",
  model: "X5",
  color: "red",
  f_carinfo: function () {
    return this.type + " " + this.model + " " + this.color;
  },
};

const car2info = car2.type + " " + car2.model + " " + car3.color;

function f_car2info() {
  document.getElementById("demo3").innerHTML = car2info;
}

function f_car3info() {
  document.getElementById("demo4").innerHTML = car3.f_carinfo();
}
function Person(fname, lname, age, email){
this.fname = fname;
this.lname = lname;
this.age = age;
this.email = email;
this.nation="Indian";
}

const person1 = new Person("Alan", "Mathew", 22, "jay@example.com");
const person2 = new Person("John", "Doe", 30, "john@example.com");
const person3 = new Person("Jane", "Doe", 25, "jane@example.com");
