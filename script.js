const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeImageBtn');
    const img = document.getElementById('myImage');

    button.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
        img.src = `${images[currentIndex]}?t=${new Date().getTime()}`; // Add a timestamp to avoid caching
    });
});