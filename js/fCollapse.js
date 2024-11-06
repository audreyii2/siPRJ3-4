// Handle collapsible sections
document.querySelectorAll('.collapsible h2').forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
        let content = header.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

document.querySelectorAll('.expandable-image').forEach(img => {
    img.addEventListener('click', () => img.classList.toggle('expanded'));
});