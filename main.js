function showMessage() {
    alert("This mesage is inside the function");
}
showMessage();

function sum(number1, number2){
    return number1 + number2;
}
console.log(sum(25, 5));

function toCelcius(f){
    return(5/9) * (f-32);
}

console.log("54 farenheit is equal to " +toCelcius(54) + "celcius");

var result = toCelcius(54)
console.log("54 farenheit is equal to " + result + "celcius");

var arrowFunction = () => alert ("hello world");
arrowFunction();

var arrowFunction = name => alert('hello world ${name}');
arrowFunction("John Doe");

function dsFunction(){
    var localVar = "digjital shkoll";
    alert(localVar);
}

function toSeconds(minutes){
    return minutes * 60;
}
console.log(toSeconds(60));

function triangleArea(baseLength, height){
    return 0.5 * baseLength * height
}
console.log(triangleArea(5,7));

var car = {
    name:"Mercedes",
    color:red,
    year:2024,
    kilometres: 0,
    startEngine : function(){
            alert("Vrooooooooooooooooooooooom!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    },
    get getKilometres() {
        return this.kilometres;
    },
    set setKilometres(km) {
        this.kilometres = km;
    }
};

console.log(car.getKilometres);
car.setKilometres = 100;
console.log(car.getKilometres);

var school = {
    name: "Digital school",
    subject: "programming",
    students: 1500,
    year: 2024,
};
alert(car.name);
alert(car['color']);
car.startEngine();

var computer = new Object();
computer.name = "Lenovo";
computer.CPU = "core i 7";
computer.RAM = "16GB";
computer.GPU = "GeForce Gt730 2GB Dual DP HP";

computer.type = function() {
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;
};

alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);

function Computer(name, GPU, CPU, RAM){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("Macbook pro", "M1 8-core", "8GB", "5600M GPU");
var computer2 = new Computer("Acer", "Intel Core i3", "4GB", "Intergrated");

























