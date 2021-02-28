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
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', getContactInfo);
})

let totalCruiseSum = 0;
var extrasSpaceWalk = document.getElementById("spacewalk");
var extrasZeroGravity = document.getElementById("zero-gravity");
var extrasShuttle = document.getElementById("shuttle");
var extrasVIP = document.getElementById("vip");

const cruiseExtras = ()=>{
    let extrasPricing = {
        spacewalk: 500,
        zeroGravity: 100,
        shuttle: 1000,
        vip: 2000
    }
}