console.log("nehal");
let x=5
let y=6
let z=x+y
console.log(z);

function alertme(){
    let name="Nehal"
    alert("hello "+ name);
}
function vote(){
    let age =prompt("Enter your age");
    let msg;
    if (age>=18){
        msg="You can vote";
    }
    else if(age<0){
        msg="Invalid age";
    }
    else{
        msg="You cannot vote";
    }
  document.getElementById("print1").innerHTML=msg;
}

let n=1;
for (n=2;n<=10;n=n+2){

    console.log(n);

}