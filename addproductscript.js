function addproduct() {
	var item = document.getElementById("item").value;
	var brand = document.getElementById("brand").value;
	var design = document.getElementById("design").value;
	var size = document.getElementById("size").value;
	var thick = document.getElementById("titem").value;
	var description = document.getElementById("des").value;
	if(item==''){
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
	else{
		alert("product added sucessfully");
		window.location.reload();
	}
}
document.querySelector(".butt").addEventListener("click",addproduct);