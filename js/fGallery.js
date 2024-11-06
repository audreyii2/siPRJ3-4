// Gallery carousel script with special styles
let images = [];
let currentImageIndex = 0;

function preloadImages() {
    images = [
        // Add more gallery images with their specific styles here
        { src: "img/IMG_20240829_171701146.jpg", alt: "Presenting Gallery Picture #1" },
        { src: "img/IMG_8973.jpg", alt: "Presenting Gallery Picture #2" },
        { src: "img/IMG_9018.jpg", alt: "Presenting Gallery Picture #3" },
        { src: "img/IMG_9100.jpg", alt: "Presenting Gallery Picture #4" },
        { src: "img/IMG_9200.jpg", alt: "Presenting Gallery Picture #5" },
        { src: "img/IMG_9300.jpg", alt: "Presenting Gallery Picture #6" },
        { src: "img/IMG_9299.jpg", alt: "Presenting Gallery Picture #7" },
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