// Placeholder filenames - REPLACE THESE with your actual image filenames
const catImages = [
    'cat1.jpg',
    'cat2.png',
    'cat3.gif',
    // Add more cat image filenames here
];

const dogImages = [
    'dog1.jpeg',
    'dog2.jpg',
    'dog3.webp',
    // Add more dog image filenames here
];

// Get references to the HTML elements
const catImageElement = document.getElementById('cat-image');
const dogImageElement = document.getElementById('dog-image');
const catContainer = document.getElementById('cat-container');
const dogContainer = document.getElementById('dog-container');

// Function to get a random item from an array
function getRandomItem(arr) {
    if (!arr || arr.length === 0) {
        console.error("Image array is empty or undefined!");
        return null; // Return null or a default path if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to load a new pair of random images
function loadNewImages() {
    const randomCat = getRandomItem(catImages);
    const randomDog = getRandomItem(dogImages);

    if (randomCat) {
        catImageElement.src = `images/cats/${randomCat}`;
        catImageElement.alt = `Funny cat: ${randomCat}`; // Update alt text
    } else {
        catImageElement.src = ''; // Clear src or set to a placeholder if no image found
        catImageElement.alt = 'No cat image available';
        console.log("Could not load cat image.");
    }

    if (randomDog) {
        dogImageElement.src = `images/dogs/${randomDog}`;
        dogImageElement.alt = `Funny dog: ${randomDog}`; // Update alt text
    } else {
         dogImageElement.src = ''; // Clear src or set to a placeholder if no image found
        dogImageElement.alt = 'No dog image available';
        console.log("Could not load dog image.");
    }
}

// Event listeners for clicking on either image container
catContainer.addEventListener('click', () => {
    console.log("Voted for Cat!"); // Simple feedback for now
    loadNewImages();
});

dogContainer.addEventListener('click', () => {
    console.log("Voted for Dog!"); // Simple feedback for now
    loadNewImages();
});

// --- Initial Load ---
// Load the first pair of images when the page loads
document.addEventListener('DOMContentLoaded', loadNewImages);
