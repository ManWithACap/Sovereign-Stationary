if (!sessionStorage.getItem("username")) {
	window.location.href = localStorage.getItem("loginPage");
}

window.onload = function() {
	document.getElementById("username").innerHTML = window.sessionStorage.getItem("username");
}