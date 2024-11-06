// Toggle search form visibility on FAB click
document.querySelector('.fab').addEventListener('click', () => {
    const searchPopup = document.getElementById('search-popup');
    if (searchPopup.classList.contains('active')) {
        searchPopup.classList.remove('active');
        setTimeout(() => searchPopup.style.display = 'none', 300); // Wait for the transition to complete
    } else {
        searchPopup.style.display = 'block';
        setTimeout(() => searchPopup.classList.add('active'), 10); // Add class after ensuring display is block
    }
});

// Highlight search results and initialize navigation
document.querySelector('.search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.querySelector('.search-field').value.trim();
    if (!query) return;

    // Remove previous highlights
    document.querySelectorAll('.highlighted').forEach(el => {
        el.classList.remove('highlighted');
        el.classList.remove('highlighted-focus');
    });

    // Reset highlights list and index
    highlights = [];
    currentHighlightIndex = -1;

    // Expand all collapsible sections for searching within them
    document.querySelectorAll('.collapsible.active .content').forEach(section => {
        section.style.display = "block";
    });

    // Highlight new results
    const bodyContent = document.querySelector('body').innerHTML;

    const regex = new RegExp(`(${query})`, 'gi');
    let newContent = bodyContent.replace(regex, '<span class="highlighted">$1</span>');
    document.querySelector('body').innerHTML = newContent;

    highlights = document.querySelectorAll('.highlighted');

    // Move focus to the first highlight if exists
    if (highlights.length > 0) {
        currentHighlightIndex = 0;
        highlights[currentHighlightIndex].classList.add('highlighted-focus');
        highlights[currentHighlightIndex].scrollIntoView(true);
    }
});

// Navigate through highlights using Tab or Enter key
document.addEventListener('keydown', function (e) {
    if ((e.key === 'Tab' || e.key === 'Enter') && highlights.length > 0) {
        e.preventDefault();
        highlights[currentHighlightIndex].classList.remove('highlighted-focus');

        // Move to the next highlight, stop at the end of the page
        currentHighlightIndex = (currentHighlightIndex + 1);
        if (currentHighlightIndex >= highlights.length) {
            return; // Escape the navigation when reaching the end
        }

        highlights[currentHighlightIndex].classList.add('highlighted-focus');
        highlights[currentHighlightIndex].scrollIntoView(true);
    }
});


