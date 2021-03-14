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
        zipcode: document.getElementById("zipCode").value,
        state: document.getElementById("state").value,
        ccNumber: document.getElementById("ccNumber").value,
        ccExp: document.getElementById("ccExp").value,
        ccCode: document.getElementById("ccCode").value
    }

    contactInfo.push(info);

    if(isContactFormValid(info)){
        displayModal();
    }
}

//posts all gathered data to modal for trip confirmation
let tripName = sessionStorage.getItem('place');
let tripCost = sessionStorage.getItem('total');
const postModal = () =>{

    document.getElementById("modal-name").innerHTML= `${contactInfo[0].firstName} ${contactInfo[0].lastName}`;
    document.getElementById("modal-email").innerHTML= `${contactInfo[0].email}`;
    document.getElementById("modal-address").innerHTML= `${contactInfo[0].address}`;
    document.getElementById("modal-city").innerHTML= `${contactInfo[0].city}`;
    document.getElementById("modal-phone").innerHTML= `${contactInfo[0].phone}`;
    document.getContactInfo("modal-state").innerHTML= `${contactInfo[0].state}`;
    document.getElementById("modal-total").innerHTML= `${tripCost}`;

    switch(tripName){
        case "MARS":
            document.getElementById("modal-dest").innerHTML= `The cruise to ${cruiseOne.name} leaves ${cruiseOne.departure} and will return ${cruiseOne.return}.`;
            break;
        case "JUPITER":
            document.getElementById("modal-dest").innerHTML= `The cruise to ${cruiseTwo.name} leaves ${cruiseTwo.departure} and will return ${cruiseTwo.return}.`;
            break;
        case "SATURN":    
            document.getElementById("modal-dest").innerHTML= `The cruise to ${cruiseThree.name} leaves ${cruiseThree.departure} and will return ${cruiseThree.return}.`;
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sub-btn').addEventListener('click', getContactInfo);
    document.getElementById('sub-btn').addEventListener('click', postModal);
    // document.getElementById('mod-btn').addEventListener('click', postModal);
})



function displayModal(){
    document.getElementById('payModal').style.display = "block";
}

function isContactFormValid(contactFormInfo){

    if(contactFormInfo.firstName == "" || contactFormInfo.lastName == ""){
        alert("First/Last Name Required");
        return false;
    }
    if(contactFormInfo.email == ""){
        alert("Email Required");
        return false;
    }
    if(contactFormInfo.phone == "" || contactFormInfo.phone.length !== 10){
        alert("Phone invalid. 10 digits no spaces, dashes, or ()");
        return false;
    }
    if(contactFormInfo.address == ""){
        alert("Address Required");
        return false;
    }
    if(contactFormInfo.city == ""){
        alert("City Required");
        return false;
    }
    if(contactFormInfo.zipcode == "" || contactFormInfo.zipcode.length !== 5){
        alert("Zipcode Invalid. Must be 5 digits.");
        return false;
    }
    if(contactFormInfo.ccNumber == "" || contactFormInfo.ccNumber !== "1234123412341234"){
        alert("Credit Card Number Invalid");
        return false;
    }
    if(contactFormInfo.ccExp == "" || contactFormInfo.ccExp !== "0977"){
        alert("Invalid Credit Card Expiration");
        return false;
    }
    if(contactFormInfo.ccCode == "" || contactFormInfo.ccCode !== "000"){
        alert("Invalid Credit Card Security Code");
    }else{
        alert("Payment Successful!");
        return true;
    }
}

