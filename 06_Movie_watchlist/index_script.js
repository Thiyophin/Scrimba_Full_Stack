const API_KEY = "ed64bc4e";
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const movieResults = document.getElementById("movieResults");

function getWatchlist() {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
}

function saveWatchlist(list) {
    localStorage.setItem("watchlist", JSON.stringify(list));
}

function addToWatchlist(movie) {
    const watchlist = getWatchlist();

    const exists = watchlist.some(item => item.imdbID === movie.imdbID);

    if (!exists) {
        watchlist.push(movie);
        saveWatchlist(watchlist);
        alert("Movie added to watchlist!");
    } else {
        alert("Movie already in watchlist!");
    }
}

async function searchMovies() {
    const query = searchInput.value.trim();

    if (!query) return;

    movieResults.innerHTML = `<p class="loading">Loading...</p>`;

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        const data = await response.json();

        if (data.Response === "False") {
            movieResults.innerHTML = `
                <div class="empty-state">
                    <p>Unable to find what you're looking for.</p>
                </div>
            `;
            return;
        }

        const detailedMovies = await Promise.all(
            data.Search.map(async (movie) => {
                const res = await fetch(
                    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
                );
                return await res.json();
            })
        );

        renderMovies(detailedMovies);

    } catch (error) {
        movieResults.innerHTML = `<p>Error fetching movies.</p>`;
        console.error(error);
    }
}

function renderMovies(movies) {
    movieResults.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}">
            <div class="movie-info">
                <h3>${movie.Title} <span>⭐ ${movie.imdbRating}</span></h3>
                <p>${movie.Runtime} • ${movie.Genre}</p>
                <p>${movie.Plot}</p>
                <button class="watchlist-btn">+ Watchlist</button>
            </div>
        `;

        card.querySelector(".watchlist-btn").addEventListener("click", () => {
            addToWatchlist(movie);
        });

        movieResults.appendChild(card);
    });
}

searchBtn.addEventListener("click", searchMovies);

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchMovies();
    }
});