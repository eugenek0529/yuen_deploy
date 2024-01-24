document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function () {
        menuToggle.checked = !menuToggle.checked;
    });
});

const path = window.location.pathname;
    if (path.endsWith('.html') && path !== '/404.html') {
      const newPath = path.replace(/\.html$/, '');
      window.location.replace(newPath);
    }