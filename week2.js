//Very Easy
function min( num1, num2) {
    if(num1 < num2)
    return num1;
    else
    return num2;
}

console.log(min(0,10));
console.log(min(0, -10));

//Easy

let names = [
   ['Joshua', 23]
   ['Randy', 18]
   ['Nala', 1]
];

console.log(`Hello my name is ${names[1][0]} ${names[1][1]} and I am ${names}[1][3] years old`)

//Medium

 //let birthMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 //let month = prompt("Enter your birth month number")
// console.log(birthMonth[Number(month) - 1])

let birthMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = prompt("Enter your birth month number")

if(month === "1") {
    console.log(birthMonth[0])
}
else if(month === "2") {
    console.log(birthMonth[1])
}
else if(month === "3") {
    console.log(birthMonth[2])
}
else if(month === "4") {
    console.log(birthMonth[3])
}
else if(month === "5") {
    console.log(birthMonth[4])
}
else if(month === "6") {
    console.log(birthMonth[5])
}
else if(month === "7") {
    console.log(birthMonth[6])
}
else if(month === "8") {
    console.log(birthMonth[7])
}
else if(month === "9") {
    console.log(birthMonth[8])
}
else if(month === "10") {
    console.log(birthMonth[9])
}
else if(month === "11") {
    console.log(birthMonth[10])
}
else if(month === "12") {
    console.log(birthMonth[11])
}

//Hard

const tom = BMI (8,9);
const jerry = BMI(45,10);

function BMI(mass, height) {
    return (mass) / (Math.pow(height,2))
}

console.log(`Is Tom's BMI higher than Jerry's? ${tom > 30} is bigger than ${jerry}`)

