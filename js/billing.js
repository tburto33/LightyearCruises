//temp array to store contact info
let contactInfo = [];

//get contact information from payment.html
const getContactInfo = (e)=>{
    e.preventDefault();
    let info = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        zipcode: document.getElementById("zipCode").value
        // state: document.getElementById("state").values
    }

    let ccInfo = {
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
            alert("Phone invalid. 10 digits no spaces, dashes, or ()");
        }
        if(info.address == ""){
            alert("Address Required");
        }
        if(info.city == ""){
            alert("City Required");
        }
        if(info.zipcode == "" || info.zipcode.length !== 5){
            alert("Zipcode Invalid. Must be 5 digits.");
        }
        if(ccInfo.ccNumber == "" || info.ccNumber !== "1234123412341234"){
            alert("Credit Card Number Invalid");
        }
        if(ccInfo.ccExp == "" || info.ccExp !== "0977"){
            alert("Invalid Credit Card Expiration");
        }
        if(ccInfo.ccCode == "" || info.ccCode !== "000"){
            alert("Invalid Credit Card Security Code");
        }
        console.log(contactInfo);
}    

const postModal = () =>{

    document.getElementById("modal-name").innerHTML= `${contactInfo[0].firstName} ${contactInfo[0].lastName}`;
    document.getElementById("modal-email").innerHTML= `${contactInfo[0].email}`;
    document.getElementById("modal-address").innerHTML= `${contactInfo[0].address}`;
    document.getElementById("modal-city").innerHTML= `${contactInfo[0].city}`;
    document.getElementById("modal-phone").innerHTML= `${contactInfo[0].phone}`;
    // document.getContactInfo("modal-state").innerHTML= `${contactInfo[0].state}`;
    // document.getElementById("modal-dest").innerHTML= `${contactInfo.city.value}`;
    // document.getElementById("modal-extra").innerHTML= `${contactInfo.city.value}`;
    document.getElementById("modal-total").innerHTML=`${totalTripCost[0]}`;
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sub-btn').addEventListener('click', getContactInfo);
    document.getElementById('sub-btn').addEventListener('click', postModal);
})

