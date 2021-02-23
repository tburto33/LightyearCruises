// **OBJECTS**

const cruiseOne = 
{
    name: "mars",
    departure: "June 12, 2077",
    return: "July 12, 2077",
    cost: "$100,000"
};

const cruiseTwo = 
{
    name: "jupiter",
    departure: "October 20, 2077",
    return: "November 30, 2077",
    cost: "$600,000"
};

const cruiseThree = 
{
    name: "saturn",
    departure: "December 15, 2077", 
    return: "February 14, 2077",
    cost: "$800,000"
};

 // **FUNCTIONS**
function makeReservation(){
    const welcomePrompt = prompt("Would you like to make a reservation? Yes or No");
        if(welcomePrompt.toLowerCase() === "yes"){
            getDestination();
        } else if(welcomePrompt.toLowerCase() === "no"){
            alert("Thanks, please come back again.");
        }else {
            alert("Yes or No only accepted answers. Please try again.");
            // makeReservation();
        }
}

function getDestination(){
    const destPrompt = prompt(`Where would you like to go: ${cruiseOne.name.toUpperCase()}, ${cruiseTwo.name.toUpperCase()}, or ${cruiseThree.name.toUpperCase()}?`);

    return destPrompt.toLowerCase();
}

 function tripInfo(cruise, departure, returns, cost){
    const tripAnswer = prompt(`Next trip to ${cruise.toUpperCase()} leaves ${departure} and returns on ${returns}. Total cost is ${cost}. Would you like to book it? Yes or No.`);

    if(tripAnswer.toLowerCase() === "yes"){
        getEmail();
    } else if(tripAnswer.toLowerCase() === "no"){
        getDestination();
    }else {
        alert("Not a valid response.");
        // getDestination();
    }
  }

  function getEmail(){
          const email = prompt("What is your email address?");
          alert(`Trip booked! Confirmation email sent to ${email.toLowerCase()}.`);
  }
