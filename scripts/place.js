document.getElementById("lastModified").innerHTML = document.lastModified;
const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


document.addEventListener('DOMContentLoaded', function () {
    const showMoreLink = document.getElementById('show-more');
    const moreContent = document.querySelector('.more-content');

showMoreLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        showMoreLink.textContent = 'Less';
    } else {
        moreContent.style.display = 'none';
        showMoreLink.textContent = "More";

    }

});

});

document.addEventListener('DOMContentLoaded', function () {
    const temperature = 50; // Static temperature value in °F
    const windSpeed = 3; // Static wind speed value in mph/h

    function calculateWindChill(temp, speed) {
        // Wind chill calculation formula for imperial units (°F and mph/h)
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    function displayWindChill() {
        const windChillElement = document.getElementById('wind-chill');

        if (temperature <= 40 && windSpeed > 5) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${windChill.toFixed(2)}°C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }

    displayWindChill();
});
