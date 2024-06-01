if (!sessionStorage.getItem("username")) {
	if (window.location.href.includes("manwithacap")) {
		window.location.href = "/Sovereign-Stationary";
	}
	else {
		window.location.href = "/";
	}
}

window.onload = function() {
	document.getElementById("username").innerHTML = window.sessionStorage.getItem("username");
}