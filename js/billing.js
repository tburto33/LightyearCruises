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
var stateValue = document.getElementsByTagName("option")[state].text;

//**CONFIRMATION MODAL ELEMENTS**
var confirmationModalName = document.getElementById("modal-name");
var confirmationModalEmail = document.getElementById("modal-email");
var confirmationModalAddress = document.getElementById("modal-address");
var confirmationModalCity= document.getElementById("modal-city");
var confirmationModalPhone = document.getElementById("modal-phone");
var confirmationModalState = document.getElementById("modal-state");
var confirmationModalTotal = document.getElementById("modal-total");
var confirmationModal = document.getElementById("payModal");

//**STORED SESSION DATA FROM DESTINATION.JS**
let tripName = sessionStorage.getItem('place');
let tripCost = sessionStorage.getItem('total');

//**VALIDATION VARS**
var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//validates payment form fields and displays modal if "true"
const executePaymentForm = ()=>{
    if(isPaymentFormValid()){
        setModalValues();
        displayConfirmationModal();
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sub-btn').addEventListener('click', executePaymentForm); 
})

//**PAYMENT FORM FUNCTIONS**

//Inserts payment form values into confirmation modal
const setModalValues = () =>{
    confirmationModalName.innerHTML = `${firstName.value} ${lastName.value}`;
    confirmationModalEmail.innerHTML = `${email.value}`;
    confirmationModalAddress.innerHTML = `${address.value}`;
    confirmationModalCity.innerHTML = `${city.value}`;
    confirmationModalPhone.innerHTML = `${phone.value}`;
    confirmationModalState.innerHTML = `${stateValue}`;
    confirmationModalTotal.innerHTML = `${tripCost}`;

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
    confirmationModal.style.display = "block";
}

//validates payment form values
function isPaymentFormValid(){
    if(firstName.value == "" || lastName.value == ""){
        alert("First/Last Name Required");
        return false;
    }
    if(email.value == "" || !emailFilter.test(email.value) ){
        alert("Please Provide Valid Email");
        email.focus;
        return false;
    }
    if(address.value == ""){
        alert("Address Required");
        return false;
    }
    if(phone.value == "" || phone.value.length !== 10){
        alert("Phone invalid. 10 digits no spaces");
        return false;
    }
    if(zipCode.value == "" || zipCode.value.length !== 5){
        alert("Zipcode Invalid. Must be 5 digits.");
        return false;
    }
    if(city.value == ""){
        alert("City Required");
        return false;
    }
    if(ccNumber.value == "" || ccNumber.value !== "1234123412341234"){
        alert("Credit Card Number Invalid");
        return false;
    }
    if(ccExp.value == "" || ccExp.value !== "0977"){
        alert("Invalid Credit Card Expiration");
        return false;
    }
    if(ccCode.value == "" || ccCode.value !== "000"){   
        alert("Invalid Credit Card Security Code");
    }else{
        alert("Payment Successful!");
        return true;
    }
}