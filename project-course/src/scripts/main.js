document.addEventListener("DOMContentLoaded", function() {
  loadComponent('../layout/footer.html', 'footer-container');
  loadComponent('../layout/navbar.html', 'navbar-container');
})

function loadComponent(url, containerId) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch(error => console.error(`Ошибка при загрузке ${url}:`, error )
    );
}