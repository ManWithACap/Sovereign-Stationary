document.getElementById('loginForm').addEventListener('submit', async function(event) {
	event.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	try {
		var response = await fetch('./Data/userinfo.json');
		if (!response.ok) {
			throw new Error('Failed to load user data');
		}
		var users = await response.json();

		var authenticatedUser = users.find(function(user) {
			return user.username === username && user.password === password;
		});

		if (authenticatedUser) {
			window.location.href = "https://manwithacap.github.io/Sovereign-Stationary/pages/dashboard"/*"https://1dc3eba1-3cc3-49b4-8bf5-e325f8d8338d-00-scc07rt6lmkl.kirk.replit.dev/pages/dashboard.html"*/;
		} else {
			document.getElementById('error').textContent = 'Invalid username or password';
		}
	} catch (error) {
		console.error('Error:', error.message);
		document.getElementById('error').textContent = 'Failed to load user data';
	}
});
