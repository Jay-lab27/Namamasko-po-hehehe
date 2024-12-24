
document.getElementById('download').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'Pic3.jpg'; // URL of the QR code image
    link.download = 'QR_Code.jpg';
    link.click();
});



function playMerryChristmas() {
    var audio = new Audio('sound1.mp3'); // Replace with your sound file
    audio.play();
}



