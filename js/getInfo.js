//gets contact information
let contactInfo = [];
const getContactInfo = (e)=>{
    e.preventDefault();
    let info = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value
    }
    contactInfo.push(info);

    if(info.firstName == "" || info.lastName == "" || info.email == ""){
        alert("Missing information");
    }else {
        console.log(`Hello, ${info.firstName} ${info.lastName}. Your email is ${info.email}.`);
    }    
}

//formats numbers to US Currency
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

//checks for destination & extras returns total of values
const getCruiseCost = (e) => {
    e.preventDefault();
    var checkedVal = []; //temp array for stored values

    //validates destination & pushes value of checked to array
    var dest = document.querySelector('input[name=planet]:checked');
    if(dest){
        checkedVal.push(parseInt(dest.value));
    }else{
        alert("Please select destination!");
    }

    //loops through extras for checked values
    var extras = document.getElementsByName('extra');
    for(i=0; extras[i]; i++){
        if(extras[i].checked){
            checkedVal.push(parseInt(extras[i].value))
        }
    }

    //adds values from array and returns total to form.html
    document.getElementById('tripTotal').innerHTML = `${formatter.format(checkedVal.reduce((a,b) => a + b, 0))}`;
}

//listener for submit btn
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', getCruiseCost);
    // document.getElementById('btn').addEventListener('click', getExtras);
})
