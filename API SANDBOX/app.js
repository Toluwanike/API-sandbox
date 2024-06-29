
// // Fetch a random joke based on the selected category
// async function fetchJoke(category) {
//     const jokeBox = document.getElementById('joke');

//     if (category) {
//         try {
//             const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
//             const jokeData = await response.json();
//             jokeBox.textContent = jokeData.value;
//         } catch (error) {
//             console.error('Error fetching joke:', error);
//             jokeBox.textContent = 'Failed to fetch joke.';
//         }
//     } else {
//         jokeBox.textContent = 'Please select a category.';
//     }
// }

// // Handle form submission
// function submitForm(event) {
//     event.preventDefault();
//     const category = document.getElementById('jokeCategories').value;
//     fetchJoke(category);
// }

// // Initialize the dropdown with categories on page load
// document.addEventListener('DOMContentLoaded', fetchCategories);



// Fetch joke categories and populate the dropdown
const fetchCategories = async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        const categories = await response.json();
        const dropdown = document.getElementById('jokeCategories');

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            dropdown.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

// Fetch a random joke based on the selected category
const fetchJoke = async (category) => {
    const jokeBox = document.getElementById('joke');
    jokeBox.textContent = 'Loading...';

    if (category) {
        try {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
            const jokeData = await response.json();
            jokeBox.textContent = jokeData.value;
        } catch (error) {
            console.error('Error fetching joke:', error);
            jokeBox.textContent = 'Failed to fetch joke.';
        }
    } else {
        jokeBox.textContent = 'Please select a category.';
    }
};

// Handle form submission
const submitForm = (event) => {
    event.preventDefault();
    const category = document.getElementById('jokeCategories').value;
    fetchJoke(category);
};

// Initialize the dropdown with categories on page load
document.addEventListener('DOMContentLoaded', fetchCategories);    


document.getElementById('nextPageBtn').addEventListener('click', () => {
    window.location.href = 'details.html';





