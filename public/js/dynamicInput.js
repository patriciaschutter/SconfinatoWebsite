var max_fields = 15; //maximum input boxes allowed
var x = 1; //initial text box count
function addMemberfield(divName){
	console.log("hiii ")
	console.log(divName)
	if( x < max_fields ) {
		x++
		var newdiv = document.createElement('div');
		
		newdiv.innerHTML = "Ex A-lid" + (x + 1) + "<br><div class='col-sm-3'> test test </div>" ;
		document.getElementById(divName).appendChild(newdiv);
	} else {
		alert("You have reached the limit of adding" + max_fields + " inputs");
    }
}


// <div class='col-sm-3'><span class='input-group-addon'> Voornaam </span><input id='inputFN' type='text' class='form-control' placeholder='First name' required  name='first_name" + (x + 1)"'></input></div><div class="col-sm-3"><span class="input-group-addon"> Achternaam </span><input id="inputLN" type="text" class="form-control" placeholder="Achternaam" required name='last_name" + (x + 1)"'></input></div><div class='col-sm-2'><span class='input-group-addon'> Geboortedatum </span><input id='inputDOB' type='date' data-date='' data-date-format='DD MMM YYYY' class='form-control' placeholder='Achternaam' name='date_birth" + (x + 1)"'></input></div><div class='col-sm-2'><span class='input-group-addon'> LinkedIn </span><input id='inputLinkedIn' type='url' class='form-control' name='linkedin" + (x + 1)"' placeholder='Achternaam' pattern='https?://.+'' title='Include http://''></input></div><a href="#" class="remove_field">Remove</a></div>