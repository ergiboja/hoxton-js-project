import './style.css'

let state = {
  movies: [
    {
      title: "The Shawshank Redemption",
      year: "Year : 1994",
      rating: "9.2",
      duration: "142 min",
      genre: "Drama",
      plot: "Two imprisoned...",
      poster: "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg",
    },
    {
      title: "The Godfather",
      year: "Year : 1972",
      rating: "9.2",
      duration: "175 min",
      genre: "Drama",
      plot: "Two imprisoned...",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "The Godfather: Part II",
      year: "Year : 1974",
      rating: "9.0",
      duration: "202 min",
      genre: "Drama",
      plot: "Two imprisoned...",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "The Godfather",
      year: "Year : 1972",
      rating: "9.2",
      duration: "175 min",
      genre: "Drama",
      plot: "Two imprisoned...",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "The Godfather",
      year: "Year : 1972",
      rating: "9.2",
      duration: "175 min",
      genre: "Drama",
      plot: "Two imprisoned...",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "The Godfather",
      year: "Year : 1972",
      rating: "9.2",
      duration: "175 min",
      genre: "Drama",
      plot: "Two imprisoned...",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "The Godfather",
      year: "Year : 1972",
      rating: "9.2",
      duration: "175 min",
      genre: "Drama",
      plot: "Two imprisoned...",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "The Godfather",
      year: "Year : 1972",
      rating: "9.2",
      duration: "175 min",
      genre: "Drama",
      plot: "Two imprisoned...",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
  ],
};

function renderAMovieCard(){
  let movieContainer = document.querySelector(".movies-container");

      // <div class="single-movie-card">
      let movieCard = document.createElement('div')
      movieCard.classList.add('single-movie-card')

      let cardImg = document.createElement('img')
      cardImg.src = state.movies[0].poster

      //       <div class="movie-details">
      let movieDetails = document.createElement('div')
      movieDetails.classList.add('movie-details')
      //         <h1>SQUID GAMES</h1>
      let movieTitle = document.createElement('h1')
      movieTitle.innerHTML = state.movies[0].title
      //         <div class="year">Year : 1994</div>
      let movieYear = document.createElement('div')
      movieYear.classList.add('year')
      movieYear.innerText = state.movies[0].year
      //         <div class="duration">Duration: 2hrs 30min</div>
      let movieDuration = document.createElement('div')
      movieDuration.classList.add('duration')
      movieDuration.innerText = state.movies[0].duration
      //         <div class="category">Drama</div>
      let movieCategory = document.createElement('div')
      movieCategory.classList.add('category')
      movieCategory.innerText = state.movies[0].genre

      //         <div class="rating">Rating : 9.2</div>
      let movieRating = document.createElement('div')
      movieRating.classList.add('rating')
      movieRating.innerText = state.movies[0].rating
    // <div class="movie-description">
      let movieDescription = document.createElement('div')
      movieDescription.classList.add('movie-description')
    //             <p>Two imprisoned 
    //             </p>
      let moviePlot = document.createElement('p')
      moviePlot.innerText = state.movies[0].plot
    //           ...
    //             </p>
    //           </div>
    //           <button class="watch-now">Watch Now</button>
    //         </div> 

    let watchNow = document.createElement('button')
    watchNow.classList.add("watch-now");
    watchNow.innerText = "Watch Now";

    let addToList = document.createElement('button')
    addToList.classList.add('add-to-list')
    addToList.innerText = '+'

    movieDescription.appendChild(moviePlot)
    movieDetails.append(movieTitle, movieYear, movieDuration, movieCategory, movieRating, movieDescription, watchNow, addToList)

    movieCard.append(cardImg, movieDetails)
    
    movieContainer.appendChild(movieCard)
}

function render(){
for(let elem of state.movies){
  renderAMovieCard()
  }
}
render()