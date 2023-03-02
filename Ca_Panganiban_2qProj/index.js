var confirmTxt = "Pop up is open";
if(confirm(confirmTxt)==true){
    alert("You pressed OK");
}
else{
    alert("You pressed CANCEL");
}

let first = prompt("What's your First Name");
let last =  prompt("What's your Last Name");
confirmTxt("Hello, "+ first + last +" do you want me to compute temperature");