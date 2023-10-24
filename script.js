function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12 + minutes / 60) * 30; // 360 degrees / 12 hours = 30 degrees per hour
    const minuteDeg = (minutes + seconds / 60) * 6; // 360 degrees / 60 minutes = 6 degrees per minute
    const secondDeg = (seconds * 6); // 360 degrees / 60 seconds = 6 degrees per second

    document.getElementById('hour-hand').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock on page load
updateClock();
