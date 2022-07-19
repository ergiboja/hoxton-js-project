
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

// fetching data from the API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c525579552mshc5c64f2d7ce0330p170318jsnd8497299cf00',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles?info=mini_info&limit=10&page=1&titleType=movie&genre=Action&year=2022', options)
	.then(response => response.json())
	.then(response => {
    state.movies = response;
    console.log(state.movies);
    }
  )

let header = document.querySelector("#header");
let maincontainer = document.querySelector("#main-container")
let main = document.querySelector("#main");

function renderMainPage(){

    header.innerHTML = "";
    main.innerHTML = "";

    let headerdiv = document.createElement('div');
    headerdiv.className = "logo-text";
    let imgEL = document.createElement('img');
    imgEL.src = "./img/netflix-82871.png";
    imgEL.className = "logoimg"
    

    let divheaderlink = document.createElement('div');
    divheaderlink.className = "header-links";
    

    let ulel = document.createElement('ul');
    ulel.className = "header-ul";
    let liel = document.createElement('li');
    let buttonel = document.createElement('button');
    buttonel.className = "menu-link";
    buttonel.type = "button";
    buttonel.innerText = "Sign In";
 
    let divofmain = document.createElement('div');


    

    divofmain.className = "containeri";
    let h1el = document.createElement("h1");
    h1el.innerText = "Unlimited movies, TV shows, and more. ";
    let h3el = document.createElement("h3");
    h3el.innerText = "Watch anywhere. Cancel anytime.";
    let pel = document.createElement("p");
    pel.innerText = "Ready to watch? Enter your email to create or restart your membership.";
    let formel = document.createElement("form");
    formel.className = "container";
    formel.action = "#";
    let formh1 = document.createElement("h1");
    formh1.innerText = "Sign Up";
    let formelementdiv = document.createElement("div");
    formelementdiv.className = "form-element";
    let inputform = document.createElement("input");
    inputform.type = "text";
    inputform.name = "username";
    inputform.id="username";
    inputform.required;
    let formlabel = document.createElement("label");
    formlabel.className = "floating-label";
    formlabel.htmlFor= "username";
    formlabel.innerText = "Email or Phone Number";
    

    let pswdiv = document.createElement("div");
    pswdiv.className = "form-element";
    

    let inputpsw = document.createElement("input");
    inputpsw.name = "password";
    inputpsw.id = "password";
    inputpsw.required;
    inputpsw.setAttribute("type","password");

    let pswlabel = document.createElement("label");
   
    pswlabel.className = "floating-label";
    pswlabel.htmlFor = "password";
    pswlabel.innerText = "Password";
    let buttonsignup = document.createElement("button");
    buttonsignup.className = "btn";
    
    buttonsignup.innerText = "Sign Up";

    header?.append(headerdiv,divheaderlink);
    headerdiv.append(imgEL);
    liel.append(buttonel);
    ulel.append(liel);
    divheaderlink.append(ulel);

    main?.append(divofmain);
    divofmain.append(h1el,h3el,pel,formel,);
    formelementdiv.append(inputform,formlabel);
    pswdiv.append(inputpsw,pswlabel);
    formel.append(formh1,formelementdiv,pswdiv,buttonsignup);
    buttonel.addEventListener("click",signinPage)
    


}

function signinPage(){
    header.innerHTML = "";
    main.innerHTML = "";
    let headerdiv = document.createElement('div');
headerdiv.className = "logo-text";
let imgEL = document.createElement('img');
imgEL.src = "./img/netflix-82871.png";
imgEL.className = "logoimg"


let divheaderlink = document.createElement('div');
divheaderlink.className = "header-links";


let ulel = document.createElement('ul');
ulel.className = "header-ul";
let liel = document.createElement('li');
let buttonel1 = document.createElement('button');
buttonel1.className = "menu-link";
buttonel1.type = "button";
buttonel1.innerText = "Sign Up";




let divofmain = document.createElement('div');




divofmain.className = "containeri";

let formel = document.createElement("form");
formel.className = "container";
formel.action = "#";
let formh1 = document.createElement("h1");
formh1.innerText = "Sign In";
let formelementdiv = document.createElement("div");
formelementdiv.className = "form-element";
let inputform = document.createElement("input");
inputform.type = "text";
inputform.name = "username";
inputform.id="username";
inputform.required;
let formlabel = document.createElement("label");
formlabel.className = "floating-label";
formlabel.htmlFor= "username";
formlabel.innerText = "Email or Phone Number";


let pswdiv = document.createElement("div");
pswdiv.className = "form-element";


let inputpsw = document.createElement("input");
inputpsw.name = "password";
inputpsw.id = "password";
inputpsw.required;
inputpsw.setAttribute("type","password");

let pswlabel = document.createElement("label");

pswlabel.className = "floating-label";
pswlabel.htmlFor = "password";
pswlabel.innerText = "Password";
let buttonsignup = document.createElement("button");
buttonsignup.className = "btn";
buttonsignup.innerText = "Sign In";


header?.append(headerdiv,divheaderlink);
headerdiv.append(imgEL);
liel.append(buttonel1);
ulel.append(liel);
divheaderlink.append(ulel);

main?.append(divofmain);
divofmain.append(formel,);
formelementdiv.append(inputform,formlabel);
pswdiv.append(inputpsw,pswlabel);
formel.append(formh1,formelementdiv,pswdiv,buttonsignup);


buttonel1.addEventListener("click",renderMainPage)


}

renderMainPage()

function renderAMovieCard() {
  let movieContainer = document.querySelector(".movies-container");

  let movieCard = document.createElement("div");
  movieCard.classList.add("single-movie-card");

  let cardImg = document.createElement("img");
  cardImg.src = state.movies[0].poster;

  let movieDetails = document.createElement("div");
  movieDetails.classList.add("movie-details");
  let movieTitle = document.createElement("h1");
  movieTitle.innerHTML = state.movies[0].title;

  let movieYear = document.createElement("div");
  movieYear.classList.add("year");
  movieYear.innerText = state.movies[0].year;

  let movieDuration = document.createElement("div");
  movieDuration.classList.add("duration");
  movieDuration.innerText = state.movies[0].duration;

  let movieCategory = document.createElement("div");
  movieCategory.classList.add("category");
  movieCategory.innerText = state.movies[0].genre;

  let movieRating = document.createElement("div");
  movieRating.classList.add("rating");
  movieRating.innerText = state.movies[0].rating;

  let movieDescription = document.createElement("div");
  movieDescription.classList.add("movie-description");

  let moviePlot = document.createElement("p");
  moviePlot.innerText = state.movies[0].plot;

  let watchNow = document.createElement("button");
  watchNow.classList.add("watch-now");
  watchNow.innerText = "Watch Now";

  let addToList = document.createElement("button");
  addToList.classList.add("add-to-list");
  addToList.innerText = "+";

  movieDescription.appendChild(moviePlot);
  movieDetails.append(
    movieTitle,
    movieYear,
    movieDuration,
    movieCategory,
    movieRating,
    movieDescription,
    watchNow,
    addToList
  );

  movieCard.append(cardImg, movieDetails);

  movieContainer.appendChild(movieCard);
}

function render() {
  for (let elem of state.movies) {
    renderAMovieCard();
  }
}
render();
