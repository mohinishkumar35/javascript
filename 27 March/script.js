function display() {
    alert("This is an event");
}

//let mybtn = document.getElementById("btn");
 //mybtn.addEventListener("click", () => {
   // alert("this is also another event");
 //});
 document.getElementById("btn").addEventListener("click", display1);

 //function display() {
 //   alert("This is also an event");
 // }

let mydate = new Date();
function display1() {
    document.getElementById("demo").innerHTML = mydate;
}