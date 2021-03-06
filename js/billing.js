//gets contact information
let contactInfo = [];
const getContactInfo = (e)=>{
    e.preventDefault();
    let info = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        zipcode: document.getElementById("zipCode").value,
        ccNumber: document.getElementById("ccNumber").value,
        ccExp: document.getElementById("ccExp").value,
        ccCode: document.getElementById("ccCode").value
    }
    for(var i=0; i<info.length; i++){
        if(info[i].length == ""){
            alert("Missing Information!");
        }else{
            contactInfo.push(info);
        }
    }

    alert(contactInfo);

    // if(info.firstName == "" || info.lastName == "" || info.email == ""){
    //     alert("Missing information");
    // }else {
    //     console.log(`Hello, ${info.firstName} ${info.lastName}. Your email is ${info.email}.`);
    // }    
}

// for(var i=0; i<info.length; i++){
//     if(info[i].length == ""){
//         alert("Missing Information!");
//     }
// }