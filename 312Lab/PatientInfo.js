var patient = {
    firstname: "Nora",
    lastname: "Ahmed",
    gender: "Female",
    Birthdate: "12/05/1980"
  };
  
    var confirmation = confirm("Do you want to review patient information?");
    if (confirmation) { 
      var info = "";
      for (var key in patient) {
        info += key + ": " + patient[key] + "\n";
      }
      alert(info);
     
    }
    else {
      alert("Thank you for visiting!");
    }
  

var userAge = prompt("Please enter your age:");




if (parseInt(userAge)){
    if (userAge >= 18) {
    
   
    document.write('<p style="font-weight: bold; text-align: center; background-color: gray;">Adult </p>');
    
  
} else if (userAge >= 13) {
    
    document.write('<p style="font-weight: bold; text-align: center; background-color: gray;">Teenager</p>');
    
}


 else {
 
    document.write('<p style="font-weight: bold; text-align: center; background-color: gray;">Child</p>');
    
    
}}
else {
    alert("Invalid age. Please enter a positive integer.");
}

