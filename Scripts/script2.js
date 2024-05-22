// Function2 - Show and hide My Blog Section using Toggle

const toggleButton = document.getElementById('toggleBlogs');
const sectionToToggle = document.getElementById('blogsToToggle');

function toggleSection() {
    if (sectionToToggle.style.display === 'none' || sectionToToggle.style.display === '') {
        sectionToToggle.style.display = 'block';
    } else {
        sectionToToggle.style.display = 'none';
    }
}

// Add click event listener to the button, calling the toggleSection function when clicked
toggleButton.addEventListener('click', toggleSection);