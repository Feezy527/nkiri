const kDramaSeries = [{
    image: "image/my-troublesome-star-korean-drama-200x300.jpg",
    movieDescription: "My Troublesome Star S01 (Episode 6 Added) | Korean Drama"
}, {
    image: "image/love-takes-two-korean-drama-200x300.webp",
    movieDescription: "Love Take Two S01 (Episode 10 Added) | Korean Drama"
}, {
    image: "image/our-golden-days-korean-drama-200x300.webp",
    movieDescription: "Our Golden Days S01 (Episode 7 & 8 Added) | Korean Drama"
}, {
    image: "image/beyond-the-bar-korean-drama-200x300.webp",
    movieDescription: "Beyond The Bar S01 (Episode 10 Added) | Korean Drama"
}, {
    image: "image/Bon-Appetit-Your-Majesty-KOREAN-DRAMA-200x300.webp",
    movieDescription: "Bon Apetite, Your Majesty S01 (Episode 4 Added) | Korean Drama"
}, {
    image: "image/my-lovely-journey-korean-drama-200x300.webp",
    movieDescription: "My Lovely Journey S01 (Episode 10 Added) | Korean Drama"
}, {
    image: "image/twelve-korean-drama-200x300.jpg",
    movieDescription: "Twelve S01 (Episode 4 Added) | Korean Drama"
}, {
    image: "image/the-winning-try-korean-drama-200x300.webp",
    movieDescription: "The Winning Try S01 (Complete) | Korean Drama"
}, {
    image: "image/the-nice-guy-korean-drama-200x300.webp",
    movieDescription: "The Nice Guy S01 (Complete) | Korean Drama"
}, {
    image: "image/my-girlfriend-is-the-man-hollywood-series-200x300.webp",
    movieDescription: "My Girlfriend is the Man S01 (Episode 12 Added) | Korean Drama"
}, {
    image: "image/aema-korean-drama-200x300.webp",
    movieDescription: "Aema S01 (Complete) | Korean Drama"
}, {
    image: "image/the-echos-of-survivors-korea-200x300.webp",
    movieDescription: "The Echoes of Survivors: Inside Korea's Tragedies S01 (Complete) | Documentary Series"
}
]

let kDramaHTML = '';
kDramaSeries.forEach((movie) => {
    kDramaHTML += `
        <a href="" class="movie">
            <img class="movie-image" src=${movie.image} alt="">
            <div class="movie-title">
                ${movie.movieDescription}
            </div>
        </a>
    `
})
document.querySelector('.js-k-drama').innerHTML = kDramaHTML;





const hMovies = [{
    image: "image/the-desperate-chase-korean-movie-200x300.webp",
    movieDescription: "The Desperate Chase (2025) | Download Korean Movie"
}, {
    image: "image/what-we-hide-hollywood-movie-200x300.webp",
    movieDescription: "What We Hide (2025) | Download Hollywood Movie"
}, {
    image: "image/tron-legacy-hollywood-movie-200x300.webp",
    movieDescription: "TRON: Legacy (2010) | Download Hollywood Movie"
}, {
    image: "image/nobody-2-hollywood-movie-200x300.webp",
    movieDescription: "Nobody 2 (2025) | Download Hollywood Movie"
}, {
    image: "image/the-naked-gun-hollywood-movie-200x300.webp",
    movieDescription: "The Naked Gun (2025) | Download Hollywood Movie"
}, {
    image: "image/metro-in-dino-indian-movie-200x300.webp",
    movieDescription: "Metro... in Dino (2025) | Download Indian Movie"
}, {
    image: "image/the-home-hollywood-movie-200x300.webp",
    movieDescription: "The Home (2025) | Download Hollywood Movie"
}, {
    image: "image/clash-in-paris-wwe-wrestling-special-200x300.webp",
    movieDescription: "WWE Clash in Paris (2025) | Wrestling Special"
}, {
    image: "image/love-untangled-korean-movie-200x300.webp",
    movieDescription: "Love Untangled (2025) | Download Korean Movie"
}, {
    image: "image/fall-for-me-movie-200x300.webp",
    movieDescription: "Fall for Me (2025) | Download Foreign Movie"
}, {
    image: "image/millionaire-documentary-movie-200x300.webp",
    movieDescription: "Millionaire (2025) | Download Hollywood Documentary"
}, {
    image: "image/fantasy-football-ruined-our-lives-foreign-movie-200x300.webp",
    movieDescription: "Fantasy Football Ruined Our Lives (2025) | Download Foreign Movie"
}]

let hMoviesHTML = '';
hMovies.forEach((movie) => {
    hMoviesHTML += `
        <a href="" class="movie">
            <img class="movie-image" src=${movie.image} alt="">
            <p class="movie-title">
                ${movie.movieDescription}
            </p>
        </a>
    `
})
document.querySelector('.js-h-movie').innerHTML = hMoviesHTML;




const series = [{
    image: "image/the-terminal-list-dark-wolf-tv-series-200x300.webp",
    movieDescription: "The Terminal List: Dark Wolf S01 (Episode 4 Added) | TV Series"
}, {
    image: "image/the-summer-i-turned-pretty-hollywood-series-200x300.webp",
    movieDescription: "The Summer I Turned Pretty S03 (Episode 9 Added) | TV Series"
}, {
    image: "image/wednesday-tv-series-203x300.jpg",
    movieDescription: "Wednesday S02 (Complete) | TV Series"
}, {
    image: "image/countdown-tv-series-200x300.webp",
    movieDescription: "Countdown S01 (Complete) | TV Series"
}, {
    image: "image/alien-earth-tv-series-200x300.webp",
    movieDescription: "Alien: Earth S01 (Episode 5 Added) | TV Series"
}, {
    image: "image/the-twisted-tale-of-amanda-knox-tv-series-200x300.jpg",
    movieDescription: "The Twisted Tale of Amanda Knox S01 (Episode 4 Added) | TV Series"
}, {
    image: "image/a-knight-of-the-seven-kingdoms-tv-series-200x300.webp",
    movieDescription: "A Knight of the Seven Kingdoms S01 (Episode 4 Added) | TV Series"
}, {
    image: "image/irish-blood-hollywood-series-200x300.webp",
    movieDescription: "Irish Blood S01 (Episode 5 Added) | TV Series"
}, {
    image: "image/the-guest-tv-series-200x300.webp",
    movieDescription: "The Guest S01 (Complete) | TV Series"
}, {
    image: "image/the-runarounds-tv-series-200x300.webp",
    movieDescription: "The Runarounds S01 (Complete) | TV Series"
}, {
    image: "image/raw-wrestling-200x300.jpg",
    movieDescription: "WWE Monday Night Raw (New Episode Added) | Wrestling Series"
}, {
    image: "image/the-rainmaker-hollywood-series-200x300.webp",
    movieDescription: "The Rain Maker S01 (Episode 3 Added) | TV Series"
}]

let seriesHTML = '';
series.forEach((movie) => {
    seriesHTML += `
        <a href="" class="movie">
            <img class="movie-image" src=${movie.image} alt="">
            <p class="movie-title">
                ${movie.movieDescription}
            </p>
        </a>
    `
})
document.querySelector('.js-series').innerHTML = seriesHTML;