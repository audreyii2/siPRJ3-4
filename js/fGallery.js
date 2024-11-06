// Gallery carousel script with special styles
let images = [];
let currentImageIndex = 0;

function preloadImages() {
    images = [
        // Add more gallery images with their specific styles here
        { src: "IMG_9347.jpg", alt: "Gallery Display of Event, runner #1012" },
        { src: "IMG_9345_V2F_2024-09-14_12-39-43_867.jpg", alt: "Gallery Display of Event, intense competition" },
        { src: "IMG_4184(1).jpg", alt: "Gallery Display of Event, medallists" },
        { src: "IMG_4181.jpg", alt: "Gallery Display of Event, team members preparing their nerves for a big competition" },
        { src: "IMG_4178.jpg", alt: "Gallery Display of Event, runners exhausted by the sprint" },
        { src: "IMG_4177.jpg", alt: "Gallery Display of Event, runners keeping up good pace" },
        { src: "IMG_4176.jpg", alt: "Gallery Display of Event, marching, happy candidates" },
        { src: "IMG_4175.jpg", alt: "Gallery Display of Event, candidates chilling out before the competition" }
    ];

    images.sort((a, b) => {
        return a.src.localeCompare(b.src);
    });
}

function showImage(index) {
    const imgElement = document.getElementById("gallery-image");
    imgElement.src = images[index].src;
}

function changeImage(n) {
    currentImageIndex += n;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
}

// Initialize gallery
window.onload = function () {
    preloadImages();
    showImage(currentImageIndex);
};