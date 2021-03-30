//**DESTINATION FORM ELEMENTS
var destMars = document.getElementById('mars');
var destJupiter = document.getElementById('jupiter');
var destSaturn = document.getElementById('saturn');
var extraSpaceWalk = document.getElementById('spacewalk');
var extraZeroG = document.getElementById('zero-gravity');
var extraShuttle = document.getElementById('shuttle');
var extraVIP = document.getElementById('vip');
var cruiseTotal = document.getElementById('calculatedTotal');

//formats numbers to US Currency
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

//temp array for stored values
let checkedVal = [];

//checks for destination & extras returns total of values
const calcCruiseCost = () => {
    resetCheckedVal();

    //validates destination, pushes value of radio to checkedVal, & stores destination id
    let dest = document.querySelector('input[name=planet]:checked');
    if(dest){
        checkedVal.push(parseInt(dest.value));
        sessionStorage.setItem('place', dest.id.toUpperCase());
        enableContinueBtn();
    }else{
        alert("Please select a destination!");
    }

    //loops through extras for checked values to store in checkedVal     
    let extras = document.getElementsByName("extra");
    for(i=0; extras[i]; i++){
        if(extras[i].checked){
            checkedVal.push(parseInt(extras[i].value));
        }
    }
        
    //adds all extras and dest values pushed to checkedVal[]
    let tripTotal = formatter.format(checkedVal.reduce((a,b) => a + b, 0));

    //adds values from array and returns total to form.html
    cruiseTotal.innerHTML = `${tripTotal}`;

    //stores total for use in billing.js
    sessionStorage.setItem('total', tripTotal);
}

document.addEventListener('DOMContentLoaded', ()=>{

    //cruise information inserted into destform.html from cruiseData.js
    document.getElementById('cruiseOne').innerHTML = postCruiseInfo(cruiseOne.name, cruiseOne.departure, cruiseOne.return, cruiseOne.cost);
    document.getElementById('cruiseTwo').innerHTML = postCruiseInfo(cruiseTwo.name, cruiseTwo.departure, cruiseTwo.return, cruiseTwo.cost);
    document.getElementById('cruiseThree').innerHTML = postCruiseInfo(cruiseThree.name, cruiseThree.departure, cruiseThree.return, cruiseThree.cost);
  
    //enables continue link for payment page
    destMars.addEventListener('change', enableContinueBtn);
    destJupiter.addEventListener('change', enableContinueBtn);
    destSaturn.addEventListener('change', enableContinueBtn);

    //resets estimated price as extras/destination is changed
    destMars.addEventListener('change', calcCruiseCost);
    destJupiter.addEventListener('change', calcCruiseCost);
    destSaturn.addEventListener('change', calcCruiseCost);
    extraSpaceWalk.addEventListener('change', calcCruiseCost);
    extraZeroG.addEventListener('change', calcCruiseCost);
    extraShuttle.addEventListener('change', calcCruiseCost);
    extraVIP.addEventListener('change', calcCruiseCost);
})

//**OTHER FUNCTIONS

//enables payment button on destform.html
function enableContinueBtn(){
    document.getElementById('btn-pay').style.pointerEvents = "auto";
}

//resets checkedVal[]
function resetCheckedVal(){
    checkedVal.length = 0;
}