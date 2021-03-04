//gets contact information
let contactInfo = [];
const getContactInfo = (e)=>{
    e.preventDefault();
    let info = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value
    }
    contactInfo.push(info);
    document.forms[0].reset(); //resets form

    if(info.firstName == "" || info.lastName == "" || info.email == ""){
        console.log("Missing information");
    }else {
        console.log(`Hello, ${info.firstName} ${info.lastName}. Your email is ${info.email}.`);
    }    
}

//verifies check boxes and adds values for extras
let selectedExtras = [];
const getExtrasTotal = (e)=>{
    e.preventDefault();
    let extras = {
        spacewalk: document.getElementById("spacewalk").value,
        gravityRoom: document.getElementById("zero-gravity").value,
        shuttle: document.getElementById("shuttle").value,
        vip: document.getElementById("vip").value
    }
    for(var i=0; i<extras.length; i++){
        if(extras[i].checked){
            selectedExtras.push(parseInt(extras[i].value));
        }
    }
    console.log(selectedExtras.reduce((a, b) => a + b, 0));   
}

// verifies form fields are properly filled.
const verifyFormFilled = () =>{
    var inputs = document.getElementsByTagName('input');
    for(i=0; i<inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value = ""){
                alert("Please fill required form information.")
                return false;
            }
        }
    }
    return true;
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', verifyFormFilled, getContactInfo);
})
