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


