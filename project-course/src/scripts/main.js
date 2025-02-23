document.addEventListener("DOMContentLoaded", function () {
    loadComponent("../layout/navbar.html", "navbar-container");
    loadComponent("../layout/footer.html", "footer-container");
  });
  
  function loadComponent(url, containerId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error(`Ошибка загрузки ${url}:`, error));
  }

// =================================================================================
let currentIndex = 0;

function moveReviews(direction) {
    const wrapper = document.querySelector('.reviews-wrapper');
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;
    const visibleReviews = 3; // Сколько отзывов видно одновременно

    currentIndex += direction;

    // Ограничиваем движение влево и вправо
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalReviews - visibleReviews) {
        currentIndex = totalReviews - visibleReviews;
    }

    const offset = -currentIndex * (100 / visibleReviews);
    wrapper.style.transform = `translateX(${offset}%)`;
}

// Инициализация звёзд
document.querySelectorAll('.stars').forEach(starsContainer => {
    const rating = parseInt(starsContainer.getAttribute('data-rating'));
    const stars = starsContainer.querySelectorAll('span');

    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        }
    });
});

