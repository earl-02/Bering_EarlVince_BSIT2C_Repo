// function calculateArea(r){
//     var area;
//     if (r <= 0){
//         return 0;
//     }
    
//     else{
//         area = Math.PI * r * r;
//         return area;
//     }
// }

// var radius = 9;
// var theArea = calculateArea(radius);
// console.log("The area is: " + theArea);

function printName(firstName, lastName){
    var fullName = firstName + " " + lastName;
    return fullName;
}

var fName = printName("Juan", "Dela Cruz");
console.log("My Fullname is " + fName);