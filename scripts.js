document.getElementById('loginForm').addEventListener('submit', async function(event) {
	event.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	try {
		var response = await fetch('userinfo.json');
		if (!response.ok) {
			throw new Error('Failed to load user data');
		}
		var users = await response.json();

		var authenticatedUser = users.find(function(user) {
			return user.username === username && user.password === password;
		});

		if (authenticatedUser) {
			// Redirect to dashboard or do something else on successful login
			alert('Login successful!');
		} else {
			document.getElementById('error').textContent = 'Invalid username or password';
		}
	} catch (error) {
		console.error('Error:', error.message);
		document.getElementById('error').textContent = 'Failed to load user data';
	}
});
