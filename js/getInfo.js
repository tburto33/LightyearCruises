let contactInfo = [];

const getContactInfo = (ev)=>{
    ev.preventDefault();
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

const getExtrasTotal = (ev)=>{
    ev.preventDefault();
    let extras = {
        spacewalk: document.getElementById("spacewalk").value,
        gravityRoom: document.getElementById("zero-gravity").value,
        shuttle: document.getElementById("shuttle").value,
        vip: document.getElementById("vip").value
    }
    var extrasTotal = 0;
    for(i=0; i<extras.length; i++){
        if(extras[i].checked){
            extrasTotal += parseInt(extras[i].value);
        }
    }
    document.getElementById("total").value= "$" + extrasTotal.toFixed(2);
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', getContactInfo, getExtrasTotal);
})