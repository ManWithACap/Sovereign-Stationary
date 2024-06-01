if (!sessionStorage.getItem("username")) {
	window.location.href = "../../";
}

window.onload = function() {
	document.getElementById("username").innerHTML = window.sessionStorage.getItem("username");
}