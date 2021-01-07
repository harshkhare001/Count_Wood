function addcustomer()
{
	var username = document.getElementById("Uname").value;
	var gst = document.getElementById("GSTNO").value;
	var Address = document.getElementById("add").value;
	var phone = document.getElementById("num").value;

	if(username==''){
		alert("customer name required");
	}
	else if(gst==''){
		alert("gst no required");
	}
	else if(Address==''){
		alert("address missing")
	}
	else if(phone==''){
		alert("phone no required");
	}
	else{
		alert('Customer Added sucessfully');
		window.location.reload();
	}
}
document.querySelector(".butt").addEventListener("click",addcustomer);