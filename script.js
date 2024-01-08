// Save this code in a separate JavaScript file, e.g., script.js

const socket = new WebSocket('ws://172.20.10.5:81');

socket.onopen = function (event) {
  console.log('WebSocket connection opened:', event);
};

socket.onmessage = function (event) {
  console.log('WebSocket message received:', event.data);
  // Handle the received message as needed
};

socket.onclose = function (event) {
  console.log('WebSocket connection closed:', event);
};

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = '';
}
