var attempt = 3; 

function login()
{
	var username = document.getElementById("Uname").value;
	var password = document.getElementById("Password").value;
	if ( username == "Formget" && password == "formget#123")
		{
			alert ("Login successfully");
			window.location = "dashboard.html"; 
			return false;
		}
		else if(username=='' || password=='')
		{
			alert("Feilds empty");
			attempt--;

		}
		else
		{
			attempt --;
			alert("You have left "+attempt+" attempt;");
			
			if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}
