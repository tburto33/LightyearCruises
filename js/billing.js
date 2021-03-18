 //**PAYMENT FORM ELEMENTS**
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var city = document.getElementById("city");
var state = document.getElementById("state").selectedIndex;
var zipCode = document.getElementById("zipCode");
var ccNumber = document.getElementById("ccNumber");
var ccExp = document.getElementById("ccExp");
var ccCode = document.getElementById("ccCode");

//**CONFIRMATION MODAL ELEMENTS**
var modalName = document.getElementById("modal-name");
var modalEmail = document.getElementById("modal-email");
var modalAddress = document.getElementById("modal-address");
var modalCity= document.getElementById("modal-city");
var modalPhone = document.getElementById("modal-phone");
var modalState = document.getElementById("modal-state");
var modalTotal = document.getElementById("modal-total");

let stateValue = document.getElementsByTagName("option")[state].text;

//**PULLS STORED SESSION DATA FROM DESTINATION.JS**
let tripName = sessionStorage.getItem('place');
let tripCost = sessionStorage.getItem('total');

//validates payment form fields and displays modal if "true"
const executePaymentForm = ()=>{
    if(isPaymentFormValid()){
        postModalValues();
        displayConfirmationModal();
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sub-btn').addEventListener('click', executePaymentForm); 
})

//**PAYMENT FORM FUNCTIONS**

//Inserts payment form values into confirmation modal
const postModalValues = () =>{

    modalName.innerHTML = `${firstName.value} ${lastName.value}`;
    modalEmail.innerHTML = `${email.value}`;
    modalAddress.innerHTML = `${address.value}`;
    modalCity.innerHTML = `${city.value}`;
    modalPhone.innerHTML = `${phone.value}`;
    modalState.innerHTML = `${stateValue}`;
    modalTotal.innerHTML = `${tripCost}`;

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

//changes modal display style from "hidden"
function displayConfirmationModal(){
    document.getElementById('payModal').style.display = "block";
}

//validates payment form values
function isPaymentFormValid(){

    // if(firstName.value == "" || lastName.value == ""){
    //     alert("First/Last Name Required");
    //     return false;
    // }
    // if(email.value == ""){
    //     alert("Email Required");
    //     return false;
    // }
    // if(address.value == ""){
    //     alert("Address Required");
    //     return false;
    // }
    // if(phone.value == "" || phone.value.length !== 10){
    //     alert("Phone invalid. 10 digits no spaces, dashes, or ()");
    //     return false;
    // }
    // if(zipCode.value == "" || zipCode.value.length !== 5){
    //     alert("Zipcode Invalid. Must be 5 digits.");
    //     return false;
    // }
    // if(city.value == ""){
    //     alert("City Required");
    //     return false;
    // }
    // if(ccNumber.value == "" || ccNumber.value !== "1234123412341234"){
    //     alert("Credit Card Number Invalid");
    //     return false;
    // }
    // if(ccExp.value == "" || ccExp.value !== "0977"){
    //     alert("Invalid Credit Card Expiration");
    //     return false;
    // }
    if(ccCode.value == "" || ccCode.value !== "000"){   
        alert("Invalid Credit Card Security Code");
    }else{
        alert("Payment Successful!");
        return true;
    }
}

