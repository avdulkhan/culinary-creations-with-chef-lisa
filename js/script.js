let currentIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const selectElement = document.getElementById('skill-level');
const tableRows = document.querySelectorAll('#class-schedule-list tr');

selectElement.addEventListener('change', function () {
    const selectedLevel = this.value;

    tableRows.forEach(row => {
        if (selectedLevel === 'all' || row.classList.contains(selectedLevel)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Carousel setup for the card items
const cardCarousel = document.querySelector('.card-carousel');
let carouselPosition = 0;  // Renamed variable to carouselPosition
const itemsVisible = 3;  // Show 3 items at a time
const cardItems = document.querySelectorAll('.card-carousel-item');
const totalItems = cardItems.length;
const itemWidth = cardItems[0].offsetWidth * itemsVisible; // Get width of 3 cards

// Function to move the carousel
function moveCardCarousel() {
    // If we're at the last item, reset to first
    if (carouselPosition >= totalItems - itemsVisible) {
        carouselPosition = 0;
    } else if (carouselPosition < 0) {
        carouselPosition = totalItems - itemsVisible;
    }

    // Move the carousel by translating the carousel's container
    cardCarousel.style.transform = `translateX(-${itemWidth * carouselPosition}px)`;
}

// Manual navigation (Prev)
document.querySelector('.prev-button').addEventListener('click', () => {
    carouselPosition--;  // Move one step back
    if (carouselPosition < 0) { // If it's less than 0, reset to last set of items
        carouselPosition = totalItems - itemsVisible;
    }
    moveCardCarousel();
});

// Manual navigation (Next)
document.querySelector('.next-button').addEventListener('click', () => {
    carouselPosition++;  // Move one step forward
    if (carouselPosition >= totalItems - itemsVisible) { // If we're at the end, reset to start
        carouselPosition = 0;
    }
    moveCardCarousel();
});

// Testimonial carousel (same functionality as before)
let testimonialIndex = 0;

function showTestimonialSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Update index
    testimonialIndex += index;

    // Ensure index is within bounds
    if (testimonialIndex < 0) {
        testimonialIndex = totalSlides - 1; // Go to the last slide
    } else if (testimonialIndex >= totalSlides) {
        testimonialIndex = 0; // Go back to the first slide
    }

    // Move the slides container to the correct position
    slides.style.transform = `translateX(-${testimonialIndex * 100}%)`;
}

// Add event listeners for the navigation buttons
document.querySelector('.testimonial-prev').addEventListener('click', () => {
    showTestimonialSlide(-1); // Go to previous slide
});

document.querySelector('.testimonial-next').addEventListener('click', () => {
    showTestimonialSlide(1); // Go to next slide
});

// Auto-slide every 5 seconds
setInterval(() => {
    showTestimonialSlide(1); // Automatically move to next slide
}, 5000);
