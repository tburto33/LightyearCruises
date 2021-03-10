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
        // zipcode: document.getElementById("zipCode").value,
        ccNumber: document.getElementById("ccNumber").value,
        ccExp: document.getElementById("ccExp").value,
        ccCode: document.getElementById("ccCode").value
    }
        contactInfo.push(info);
        if(info.firstName == "" || info.lastName == ""){
            alert("First/Last Name Required");
        }
        if(info.email == ""){
            alert("Email Required");
        }
        if(info.phone == "" || info.phone.length !== 10){
            alert("Phone invalid");
        }
        if(info.address == ""){
            alert("Address Required");
        }
        if(info.city == ""){
            alert("City Required");
        }
        // if(info.zipcode == "" || info.zipcode !== "40229"){
        //     alert("Zipcode Invalid");
        // }
        if(info.ccNumber == "" || info.ccNumber !== "1234123412341234"){
            alert("Credit Card Number Invalid");
        }
        if(info.ccExp == "" || info.ccExp !== "0977"){
            alert("Invalid Credit Card Expiration");
        }
        if(info.ccCode == "" || info.ccCode !== "000"){
            alert("Invalid Credit Card Security Code");
        }
        console.log(contactInfo);
}    

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sub-btn').addEventListener('click', getContactInfo);
})


//gets contact information
// let contactInfo = [];
// const getContactInfo = (e)=>{
//     e.preventDefault();
//     let info = {
//         firstName: document.getElementById("firstName").value,
//         lastName: document.getElementById("lastName").value,
//         email: document.getElementById("email").value
//     }
//     info.push(info);

//     if(info.firstName == "" || info.lastName == "" || info.email == ""){
//         alert("Missing information");
//     }else {
//         console.log(`Hello, ${info.firstName} ${info.lastName}. Your email is ${info.email}.`);
//     }    
// }