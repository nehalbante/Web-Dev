let number1, number2;
function num1() {
    number1 = prompt("Enter number 1");
}
function num2() {
    number2 = prompt("Enter number 2");
    product();
}
function product() {
    let product = number1 * number2;
    document.getElementById("print1").innerHTML = "Product of " + number1 + " and " + number2 + " is " + product;
}
function num3() {
    let number = prompt("Enter number");
    let astorage = 0;

  for (let i = 0; i < number.length; i++){
        astorage = astorage * 10 + number % 10;
        number =Math.floor(number / 10);
    }
    document.getElementById("print2").innerHTML = astorage;

}