// Sample Movie Data (Simulating an API response like TMDB)
const trendingMovies = [
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&auto=format&fit=crop&q=60"
];

const popularMovies = [
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1542204172-e7052809f852?w=400&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1574267431644-369385f9efe4?w=400&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&auto=format&fit=crop&q=60"
];

// Function to populate rows
function populateRow(rowId, movieArray) {
    const rowElement = document.getElementById(rowId);

    movieArray.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Movie ${index + 1}`;
        img.classList.add('movie-poster');

        // Add a click alert just for interactivity
        img.addEventListener('click', () => {
            alert("Playing this title... (In a real app, this opens the video player!)");
        });

        rowElement.appendChild(img);
    });
}

// Initialize the page content
document.addEventListener("DOMContentLoaded", () => {
    populateRow('trendingRow', trendingMovies);
    populateRow('popularRow', popularMovies);

    // Form submission handle
    const form = document.getElementById('ctaForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('userEmail').value;
        alert(`Awesome! We've sent a registration link to: ${email}`);
    });
});