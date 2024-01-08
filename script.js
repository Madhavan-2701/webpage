function sendData() {
    const dataInput = document.getElementById('dataInput').value;
    const resultDiv = document.getElementById('result');

    // Perform any client-side validation if needed

    // Simulate sending data to the server (replace this with an actual API call)
    // For simplicity, we'll just display the data on the page
    resultDiv.innerHTML = `<p>Sent Data: ${dataInput}</p>`;
}
