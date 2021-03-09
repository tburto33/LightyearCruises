 // **OBJECTS**

const cruiseOne = 
{
    name: "Mars",
    departure: "June 12, 2077",
    return: "July 12, 2077",
    cost: "$12,000"
};

const cruiseTwo = 
{
    name: "Jupiter",
    departure: "October 20, 2077",
    return: "November 30, 2077",
    cost: "$36,000"
};

const cruiseThree = 
{
    name: "Saturn",
    departure: "December 15, 2077", 
    return: "February 14, 2077",
    cost: "$72,000"
};

function postCruiseInfo(cruiseName, cruiseDepart, cruiseReturn, cruiseCost){
    return `The cruise to ${cruiseName} leaves ${cruiseDepart} and will return ${cruiseReturn}.` + "<br>" + `Price: ${cruiseCost}`;
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('cruiseOne').innerHTML = postCruiseInfo(cruiseOne.name, cruiseOne.departure, cruiseOne.return, cruiseOne.cost);

    document.getElementById('cruiseTwo').innerHTML = postCruiseInfo(cruiseTwo.name, cruiseTwo.departure, cruiseTwo.return, cruiseTwo.cost);

    document.getElementById('cruiseThree').innerHTML = postCruiseInfo(cruiseThree.name, cruiseThree.departure, cruiseThree.return, cruiseThree.cost);
})
