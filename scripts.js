document.addEventListener("DOMContentLoaded", function() {
    // Initially show stats section
    showSection('stats');
});

function showSection(sectionType) {
    // Get all sections
    const statsSections = document.querySelectorAll('.stats');
    const achievementsSections = document.querySelectorAll('.achievements');

    // Show or hide sections based on the button clicked
    if (sectionType === 'stats') {
        statsSections.forEach(section => section.classList.add('active'));
        achievementsSections.forEach(section => section.classList.remove('active'));
    } else if (sectionType === 'achievements') {
        achievementsSections.forEach(section => section.classList.add('active'));
        statsSections.forEach(section => section.classList.remove('active'));
    }
}
