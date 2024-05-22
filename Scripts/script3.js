// Fuction3- To Display Current time and Date in the footer section

function displayCurrentDateTime() {
    const currentDateTimeElement = document.getElementById('currentTime');
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month as it starts from 0
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    currentDateTimeElement.textContent = dateTimeString;
}

// Call the function initially to display date and time immediately
displayCurrentDateTime();

// Update date and time every second
setInterval(displayCurrentDateTime, 1000);
