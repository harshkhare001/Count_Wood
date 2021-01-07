function cdelete(){
	var cname=document.getElementById("name").value;
	var gst=document.getElementById("gst").value;
	var add=document.getElementById("add1").value;
	var phno=document.getElementById("phno").value;

	if(cname==''){
		alert("name required");
	}
	else if(gst==''){
		alert("gst required");
	}
	else if(add==''){
		alert("address required");
	}
	else if(phno==''){
		alert("phone no. required");
	}
	else{
		alert("customer deleted sucessfully");
		window.location.reload();
	}
}
document.querySelector(".butt").addEventListener("click",cdelete);

function edit(){
	var cname=document.getElementById("name").value;
	var gst=document.getElementById("gst").value;
	var add=document.getElementById("add1").value;
	var phno=document.getElementById("phno").value;

	if(cname==''){
		alert("name required");
	}
	else if(gst==''){
		alert("gst required");
	}
	else if(add==''){
		alert("address required");
	}
	else if(phno==''){
		alert("phone no. required");
	}
	else{
		alert("Vendor edited sucessfully");
		window.location.reload();
	}
}
document.querySelector(".BUTT").addEventListener("click",edit);