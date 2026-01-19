let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.add("active");
}

// Photo click logic (already exists)
document.querySelectorAll('.photo-stack img').forEach(img => {
  img.addEventListener('click', () => {
    resetPhotos();
    img.style.zIndex = 5;
    img.style.transform = 'translateX(-50%) rotate(0deg) scale(1.05)';
  });
});

// Function to reset photo positions
function resetPhotos() {
  document.querySelectorAll('.photo-stack img').forEach(i => {
    i.style.zIndex = 1;
    i.style.transform = i.classList.contains('left')
      ? 'translateX(-60%) rotate(-8deg)'
      : i.classList.contains('right')
      ? 'translateX(-40%) rotate(8deg)'
      : 'translateX(-50%) rotate(0deg)';
  });
}

// Swipe functionality for mobile
const photoStack = document.querySelector('.photo-stack');
let startX = 0;
let endX = 0;

photoStack.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

photoStack.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

photoStack.addEventListener('touchend', () => {
  const diff = endX - startX;
  const photos = Array.from(document.querySelectorAll('.photo-stack img'));

  if (diff > 50) {
    // Swipe right → show previous photo
    swipePhoto('right', photos);
  } else if (diff < -50) {
    // Swipe left → show next photo
    swipePhoto('left', photos);
  }
});

function swipePhoto(direction, photos) {
  // Find current top photo
  const topPhoto = photos.find(photo => photo.style.zIndex == 5) || photos[1]; // default center
  const topIndex = photos.indexOf(topPhoto);

  let nextIndex;
  if (direction === 'left') {
    nextIndex = (topIndex + 1) % photos.length;
  } else if (direction === 'right') {
    nextIndex = (topIndex - 1 + photos.length) % photos.length;
  }

  resetPhotos();
  const nextPhoto = photos[nextIndex];
  nextPhoto.style.zIndex = 5;
  nextPhoto.style.transform = 'translateX(-50%) rotate(0deg) scale(1.05)';
}
