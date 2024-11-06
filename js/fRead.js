document.getElementById('read-more-btn').addEventListener('click', function () {
    const fullContent = document.getElementById('full-content');
    if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block';
        this.textContent = 'Read Less <<<';
    } else {
        fullContent.style.display = 'none';
        this.textContent = 'See Full Summary >>>';
    }
});