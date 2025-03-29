let currentIndex = 0;

function moveReviews(direction) {
  const wrapper = document.querySelector('.reviews-wrapper');
  const reviews = document.querySelectorAll('.review');
  const totalReviews = reviews.length;
  const visibleReviews = 3; 

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > totalReviews - visibleReviews) {
    currentIndex = totalReviews - visibleReviews;
  }

  const offset = -currentIndex * (100 / visibleReviews);
  wrapper.style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('.stars').forEach((starsContainer) => {
  const rating = parseInt(starsContainer.getAttribute('data-rating'));
  const stars = starsContainer.querySelectorAll('span');

  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    }
  });
});

function loadNavbar() {
  fetch('../layout/navbar.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch((error) => console.error('Error loading the navbar:', error));
}
function loadFooter() {
  fetch('../layout/footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch((error) => console.error('Error loading the navbar:', error));
}

loadNavbar();
loadFooter()


