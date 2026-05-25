const watchlistContainer = document.getElementById("watchlistContainer");

function getWatchlist() {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
}

function saveWatchlist(list) {
    localStorage.setItem("watchlist", JSON.stringify(list));
}

function removeMovie(imdbID) {
    const updatedList = getWatchlist().filter(movie => movie.imdbID !== imdbID);
    saveWatchlist(updatedList);
    renderWatchlist();
}

function renderWatchlist() {
    const movies = getWatchlist();

    if (!movies.length) {
        watchlistContainer.innerHTML = `
            <div class="empty-state">
                <p>Your watchlist is empty.</p>
            </div>
        `;
        return;
    }

    watchlistContainer.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}">
            <div class="movie-info">
                <h3>${movie.Title} <span>⭐ ${movie.imdbRating}</span></h3>
                <p>${movie.Runtime} • ${movie.Genre}</p>
                <p>${movie.Plot}</p>
                <button class="remove-btn">Remove</button>
            </div>
        `;

        card.querySelector(".remove-btn").addEventListener("click", () => {
            removeMovie(movie.imdbID);
        });

        watchlistContainer.appendChild(card);
    });
}

renderWatchlist();