function displayMailingLabel(Name, Address, City, State, Zip) {
var message = Name + Address + City + State + Zip;
console.log(message) 

}
var someName = " Yusuf ";
var someAddress = " 43-44 kissena blvd "
var someCity = " Queens";
var someState = " New York ";
var someZip = 11355

displayMailingLabel(someName,someAddress,someCity,someState,someZip)

function addNumbers(num1,num2) {
var result = num1 + num2;
console.log(result)
}
var num1 = 3;
var num2 = 6;
addNumbers(num1,num2);


function displayReceipt(totalDue, amountPaid) {
    var spent = amountPaid - totalDue;
    console.log(totalDue);
    console.log(amountPaid);
    console.log(spent)
    
     
    
}
displayReceipt(60, 65)
displayReceipt(60, 60)
displayReceipt(60, 55)
