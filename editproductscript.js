function productdelete() {
	var slno=document.getElementById("slno").value;
	var item=document.getElementById("item").value;
	var brand=document.getElementById("brand").value;
	var design=document.getElementById("design").value;
	var size=document.getElementById("size").value;
	var thick=document.getElementById("thick").value;
	var price=document.getElementById("price").value;

	if(slno==''){
		alert("feild empty");
	}
	else if(item==''){
		alert("item required");
	}
	else if(brand==''){
		alert("brand required");
	}
	else if(design==''){
		alert("design required");
	}
	else if(size==''){
		alert("size required");
	}
	else if(thick==''){
		alert("thickness required");
	}
	else if(price==''){
		alert("price required");
	}
	else{
		alert("product deleted sucessfully");
		window.location.reload();
	}

}

document.querySelector(".butt").addEventListener("click",productdelete);

function edit() {
	var slno=document.getElementById("slno").value;
	var item=document.getElementById("item").value;
	var brand=document.getElementById("brand").value;
	var design=document.getElementById("design").value;
	var size=document.getElementById("size").value;
	var thick=document.getElementById("thick").value;
	var price=document.getElementById("price").value;

	if(slno==''){
		alert("feild empty");
	}
	else if(item==''){
		alert("item required");
	}
	else if(brand==''){
		alert("brand required");
	}
	else if(design==''){
		alert("design required");
	}
	else if(size==''){
		alert("size required");
	}
	else if(thick==''){
		alert("thickness required");
	}
	else if(price==''){
		alert("price required");
	}
	else{
		alert("product edited sucessfully");
		window.location.reload();
	}

}
document.querySelector(".BUTT").addEventListener("click",edit);