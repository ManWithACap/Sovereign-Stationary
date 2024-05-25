document.getElementById("sendBtn").addEventListener("click", () => {
	const webhookUrl = 'https://discord.com/api/webhooks/1243821069534630029/a8iSk6OsE9IuEekg5KxEypfuhURB2O9cFpeQkqaws4HEZsJswD41v-LNnT2o_Wds1-k1';
	const message = {
		content: 'Hello from GitHub Pages!'
	};

	fetch(webhookUrl, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(message)
	})
	.then(response => response.json())
	.then(data => {
		console.log('Success:', data);
	})
	.catch(error => {
		console.error('Error:', error);
	});
});