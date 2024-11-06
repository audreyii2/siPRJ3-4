// Select all images on the page
document.querySelectorAll('img').forEach(img => {
  img.onerror = function () {
    this.onerror = null; // Prevents infinite loop if default image missing
    this.src = 'img/default.jpg';
    this.alt = "Display default profile image for athlete with no personal pictures."
  };
});