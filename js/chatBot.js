document.getElementById("chat-btn").onclick= chatbot();

function chatbot(){
    makeReservation();
    switch(getDestination()){
        case cruiseOne.name:
            tripInfo(cruiseOne.name, cruiseOne.departure, cruiseOne.return, cruiseOne.cost);
            break;
        case cruiseTwo.name:
            tripInfo(cruiseTwo.name, cruiseTwo.departure, cruiseTwo.return, cruiseTwo.cost);
            break;
        case cruiseThree.name:
            tripInfo(cruisethree.name, cruisethree.departure, cruisethree.return, cruisethree.cost);
    }
}
// if(getDestination().toLowerCase() == cruiseOne.name){
//     tripInfo(cruiseOne.name, cruiseOne.departure, cruiseOne.return, cruiseOne.cost);
// }
// if(getDestination().toLowerCase() == cruiseTwo.name){
//     tripInfo(cruiseTwo.name, cruiseTwo.departure, cruiseTwo.return, cruiseTwo.cost);
// }
// if(getDestination().toLowerCase() == cruiseThree.name){
//     tripInfo(cruisethree.name, cruisethree.departure, cruisethree.return, cruisethree.cost);
// }