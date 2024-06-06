if (!sessionStorage.getItem("username")) {
	if (window.location.href.includes("manwithacap")) {
		window.location.href = "/Sovereign-Stationary";
	}
	else {
		window.location.href = "/";
	}
}

let data1 = {}; // Use let instead of const

async function loadData() {
	try {
		const response = await fetch("http://amorphous.pythonanywhere.com/");
		const data = await response.json();
		data1 = data;
		updateDOM(); // Call updateDOM after data is loaded
	} catch (error) {
		console.error("Error loading data:", error);
	}
}

function updateDOM() {
	document.getElementById("mainContainer").innerHTML = JSON.stringify(data1);
}

window.onload = function() {
	document.getElementById("username").innerHTML = window.sessionStorage.getItem("username");
	loadData(); // Call loadData to fetch data
}
