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
        if(info.zipcode == "" || info.zipcode.length !== 5){
            alert("Zipcode Invalid");
        }
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

const postModal = () =>{
    import{tripTotal} from 'js\getInfo.js'

    document.getElementById("modal-name").innerHTML= `${contactInfo.firstName.value} ${contactInfo.lastName.value}`;
    document.getElementById("modal-email").innerHTML= `${contactInfo.email.value}`;
    document.getElementById("modal-address").innerHTML= `${contactInfo.address.value}`;
    document.getElementById("modal-city").innerHTML= `${contactInfo.city.value}`;
    document.getElementById("modal-phone").innerHTML= `${contactInfo.phone.value}`;
    // document.getElementById("modal-dest").innerHTML= `${contactInfo.city.value}`;
    // document.getElementById("modal-extra").innerHTML= `${contactInfo.city.value}`;
    document.getElementById("modal-total").innerHTML=`${tripTotal.value}`;
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sub-btn').addEventListener('click', getContactInfo);
    document.getElementById('sub-btn').addEventListener('click', postModal);
})

