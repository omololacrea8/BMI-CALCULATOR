

//made use of function bmi() because i already use the ONCLICK in my html file
function BMI(){
    //used .value because value can be passed to a function and the function will return a value.
    let height = document.getElementById('height').value; //this method returns the elements that has given ID which is passed to the function
    let weight = document.getElementById('weight').value;
    
        
    if ((height === '') || (height <= 0) || (isNaN(height)) ){
        document.getElementById('calcul').innerHTML = "Enter a valid height";
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        document.getElementById('calcul').innerHTML = "Enter a valid weight";

    }
    else{
        //BMI result
        let bmi = weight/(height/100*height/100);
        let bmical = (bmi.toFixed(2)); //used toFixed() method because it converts a number into string, keeping a specified number of decimals.
       //results
        document.getElementById("calcul").innerHTML = "Your BMI is " + bmical;
    }  

}
