//Elements
const destMars = document.getElementById('mars');
const destJupiter = document.getElementById('jupiter');
const destSaturn = document.getElementById('saturn');
const extraSpaceWalk = document.getElementById('spacewalk');
const extraZeroG = document.getElementById('zero-gravity');
const extraShuttle = document.getElementById('shuttle');
const extraVIP = document.getElementById('vip');

//formats numbers to US Currency
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

//temp array for stored value
let checkedVal = [];

//checks for destination & extras returns total of values
const getCruiseCost = (e) => {
    resetCheckedVal();
    e.preventDefault();

    //validates destination & pushes value of checked to array
    let dest = document.querySelector('input[name=planet]:checked');
    if(dest){
        checkedVal.push(parseInt(dest.value));
        destName.push(dest.id);
        enPayBtn();
    }else{
        alert("Please select a destination!");
    }

    //loops through extras for checked values
    var extras = document.getElementsByName("extra");
    for(i=0; extras[i]; i++){
        if(extras[i].checked){
            checkedVal.push(parseInt(extras[i].value));
        }
    }

    //adds all extras and dest values pushed to checkedVal[]
    let tripTotal = formatter.format(checkedVal.reduce((a,b) => a + b, 0));

    //adds values from array and returns total to form.html
    document.getElementById('tripTotal').innerHTML = `${tripTotal}`;

    //pushes total to temp array in cruiseData.js
    totalTripCost.push(tripTotal);
    console.log(totalTripCost);
}

//listener for Est Total btn on destform.html
document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('cruiseOne').innerHTML = postCruiseInfo(cruiseOne.name, cruiseOne.departure, cruiseOne.return, cruiseOne.cost);
    document.getElementById('cruiseTwo').innerHTML = postCruiseInfo(cruiseTwo.name, cruiseTwo.departure, cruiseTwo.return, cruiseTwo.cost);
    document.getElementById('cruiseThree').innerHTML = postCruiseInfo(cruiseThree.name, cruiseThree.departure, cruiseThree.return, cruiseThree.cost);
  
    //enables continue link for payment page
    destMars.addEventListener('change', enPayBtn);
    destJupiter.addEventListener('change', enPayBtn);
    destSaturn.addEventListener('change', enPayBtn);

    //resets estimated price 
    destMars.addEventListener('change', getCruiseCost);
    destJupiter.addEventListener('change', getCruiseCost);
    destSaturn.addEventListener('change', getCruiseCost);
    extraSpaceWalk.addEventListener('change', getCruiseCost);
    extraZeroG.addEventListener('change', getCruiseCost);
    extraShuttle.addEventListener('change', getCruiseCost);
    extraVIP.addEventListener('change', getCruiseCost);
})

//enables payment button on destform.html when dest selected
function enPayBtn(){
    document.getElementById('btn-pay').style.pointerEvents = "auto";
}

function resetCheckedVal(){
    checkedVal.length = 0;
    totalTripCost.length = 0;
    destName.length = 0;
}



