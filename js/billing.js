//gets contact information
let contactInfo = [];
const getContactInfo = (e)=>{
    e.preventDefault();
    let info = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        zipcode: document.getElementById("zipCode").value,
        ccNumber: document.getElementById("ccNumber").value,
        ccExp: document.getElementById("ccExp").value,
        ccCode: document.getElementById("ccCode").value
    }
    contactInfo.push(info);
    for(var i=0; i<contactInfo.length; i++){
        if(info.phone.length != 7){
            alert("Invalid phone number");
        }
        if(info.ccNumber.length != 16 || info.ccNumber.value != 0001234567890000){
            alert("Invalid CC number");
        }
        if(info.ccExp.length != 4 || info.ccExp.value != 1234){
            alert("Invalid CC expiration");
        }
        if(info.ccCode.length != 3 || info.ccCode.value != 000){
            alert("Invalid CC security code");
        }
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', getContactInfo);
})
