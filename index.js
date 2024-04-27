document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const searchBtn = document.getElementById("searchBtn");
    const posterBottom = document.getElementById("poster__bottom");

    searchBtn.addEventListener("click", () => {
        const searchTerm = input.value;
        searchFilm(searchTerm);
        input.value=""
    });

    function searchFilm(searchTerm) {
        fetch(`http://www.omdbapi.com/?t=${searchTerm}&apikey=7d106634`)
            .then((response) => response.json())
            .then((data) => {
                renderUI(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                posterBottom.innerHTML = `<p id="movie">Movie not found...</p>`;
            });
    }

    const renderGenres = (genres) => {
        let genreHTML = '';
        const genreList = genres.split(',');
        for (let i = 0; i < genreList.length; i++) {
            const genre = genreList[i].trim();
            genreHTML += `<p>${genre}</p>`;
        }
        return genreHTML;
    };


    function renderUI(cards) {
        const { Title, imdbRating, Rated, Year, Website, Genre, Plot, Actors, Poster } = cards;
        posterBottom.innerHTML = "";
        posterBottom.innerHTML += `
            <div class="poster__middle">
                
                    <img  src="${Poster}" alt="" width=180px>
                
                <div class="poster__middle__right">
                    <h1>${Title}</h1>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <p>${imdbRating}</p>
                    </div>
                    <div class="poster__middle__right__m">
                        <p>${Rated}</p>
                        <p>${Year}</p>
                        <p>${Website}</p>
                    </div>
                    <div class="genree">
                        ${renderGenres(Genre)}
                    </div>
                </div>
            </div>
            <div class="poster__body">
                <div class="plot">
                    <h3>Plot:</h3>
                    <p>${Plot}</p>
                </div>
                <div class="actors">
                    <h3>Cast:</h3>
                    <p>${Actors}</p>
                </div>
            </div>
        `;
    }
});
