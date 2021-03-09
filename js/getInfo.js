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
    let dest = document.querySelector('input[name=planet]:checked');
    if(dest){
        checkedVal.push(parseInt(dest.value));
    }else{
        alert("Please select a destination!");
    }

    //loops through extras for checked values
    var extras = document.getElementsByName('extra');
    for(i=0; extras[i]; i++){
        if(extras[i].checked){
            checkedVal.push(parseInt(extras[i].value))
        }
    }

    let tripTotal = formatter.format(checkedVal.reduce((a,b) => a + b, 0));

    //adds values from array and returns total to form.html
    document.getElementById('tripTotal').innerHTML = `${tripTotal}`;
}

//listener for submit btn
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', getCruiseCost);
})



