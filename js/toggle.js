document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function () {
        menuToggle.checked = !menuToggle.checked;
    });
});