// JavaScript for creating snowflakes
document.addEventListener("DOMContentLoaded", function() {
    const snowflakesContainer = document.querySelector('.snowflakes');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`; // Random speed between 5s and 10s

        snowflake.style.animationDelay = `${Math.random() * 10}s`; // Random start time
        snowflakesContainer.appendChild(snowflake);

        // Remove the snowflake once it falls
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Create snowflakes continuously
    setInterval(createSnowflake, 2000); 
});
