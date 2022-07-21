import "./style.css";
type Movie = {
  titleText: {
    text: string;
  };
  releaseDate: {
    year: number;
  };
  primaryImage: {
    url: string;
  };
  id: string;
};
type User = {
  email: string;
  password: string;
  id: string;
  name: string;
};
type State = {
  movies: Movie[];
  users: User[];
  favorites: Movie[];
};

let state: State = {
  movies: [],
  users: [],
  favorites: [],
};

// fetching data from the API
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c525579552mshc5c64f2d7ce0330p170318jsnd8497299cf00",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

fetch(
  "https://moviesdatabase.p.rapidapi.com/titles?info=mini_info&limit=20&page=1&titleType=movie&genre=Action&year=2022",
  options
)
  .then((response) => response.json())
  .then((response) => {
    state.movies = response.results;
    render();
    console.log(response);
    console.log(state.movies);
  });

//  function loginModal() {
//    let main = document.querySelector("main");
//    let modalWrapper = document.createElement("div");
//    modalWrapper.classList.add("modal-wrapper");
//    let modal = document.createElement("div");
//    modal.classList.add("modal");
//    let xButton = document.createElement("button");
//    xButton.classList.add("x-button");
//    xButton.innerText = "X";
//     xButton.addEventListener("click", function () {
//       modalWrapper.remove();
//     })

//    let form = document.createElement("form");
//    form.classList.add("form");
//    let email = document.createElement("input");
//    email.classList.add("email");
//    email.type = "email";
//    email.placeholder = "Email";
//    let password = document.createElement("input");
//    password.classList.add("password");
//    password.type = "password";
//    password.placeholder = "Password";
//    let submit = document.createElement("button");
//    submit.classList.add("modal-submit");
//    submit.innerText = "Login";

//    form.append(email, password, submit);
//    modal.append( form);
//    modalWrapper.append(xButton,modal);
//    main.append(modalWrapper);
//  }
// function clickOnLogin() {
//     let loginButton = document.querySelector(".login-link");
//     if(loginButton===null)return;
//     loginButton.addEventListener("click", function () {
//       loginModal();
//       // render();
//     });
//   }

// fetching data from the json file
fetch("http://localhost:3006/users")
  .then((response) => response.json())
  .then((response) => {
    state.users = response;
    render();
    console.log(state.users);
  });

function renderAMovieCard(source) {
  let movieContainer = document.querySelector("main");
  // let main = document.querySelector("main");
  // main.innerHTML = "";

  let movieCard = document.createElement("div");
  movieCard.classList.add("single-movie-card");
  movieCard.addEventListener("click", function () {
    renderMovieDetails(source);
  });

  let cardImg = document.createElement("img");
  cardImg.className = "card-img";
  cardImg.src = source.primaryImage.url;

  movieCard.append(cardImg);

  movieContainer.appendChild(movieCard);
}
function renderMovieDetails(api) {
  let movieContainer = document.querySelector("main");
  movieContainer.innerHTML = "";

  let movieDetails = document.createElement("div");
  movieDetails.classList.add("movie-details");

  let movieImg = document.createElement("img");
  movieImg.className = "movie-img";
  movieImg.src = api.primaryImage.url;

  let movieDetailsContainer = document.createElement("div");
  movieDetailsContainer.classList.add("movie-details-container");

  let movieTitle = document.createElement("h1");
  movieTitle.innerHTML = api.titleText.text;

  let movieYear = document.createElement("div");
  movieYear.classList.add("year");
  movieYear.innerText = api.releaseDate.year;

  let watchNow = document.createElement("button");
  watchNow.classList.add("watch-now");
  watchNow.innerText = "Watch Now";

  let addToList = document.createElement("button");
  addToList.classList.add("add-to-list");
  addToList.innerText = "Add to List";
  addToList.addEventListener("click", function () {
    state.favorites.push(api);
    // render();
  });

  let goBack = document.createElement("button");
  goBack.classList.add("go-back");
  goBack.innerText = "↩️ Go Back";
  goBack.addEventListener("click", function () {
    let main = document.querySelector("main");
    main.innerHTML = "";
    for (let elem of state.movies) {
      renderAMovieCard(elem);
    }
  });

  movieDetailsContainer.append(
    movieTitle,
    movieYear,
    watchNow,
    addToList,
    goBack
  );

  movieDetails.append(movieImg, movieDetailsContainer);

  movieContainer.appendChild(movieDetails);
}
let homeButton = document.querySelector(".home-link");
homeButton.addEventListener("click", function () {
  let main = document.querySelector("main");
  main.innerHTML = "";
  for (let elem of state.movies) {
    renderAMovieCard(elem);
    // render();
  }
});

// change the login text to user name !Needs work
let loginButton = document.querySelector(".login-link");
if (state.users.length !== 0) {
  loginButton.innerHTML = `${state.users[0].name}`;
}

let favorite = document.querySelector(".favorite-link");
favorite.addEventListener("click", function () {
  showFavorites();
  console.log(state.favorites);
});
function showFavorites() {
  let main = document.querySelector("main");
  main.innerHTML = "";
  let favoriteTitle = document.createElement("h1");
  favoriteTitle.innerText = "Favorites";
  favoriteTitle.classList.add("favorite-title");
  main.appendChild(favoriteTitle);
  for (let elem of state.favorites) {
    renderAMovieCard(elem);
  }
}
// sign up function
function signinPage(user: User) {
  let main = document.querySelector("main");
  main.innerHTML = "";

  let loginContainer = document.createElement("div");
  loginContainer.className = "login-container";
  let loginWrapper = document.createElement("div");
  loginWrapper.className = "login-wrapper";

  let loginForm = document.createElement("form");
  loginForm.className = "login-form";
  loginForm.action = "#";
  let loginFormH1 = document.createElement("h1");
  loginFormH1.innerText = "Sign In";
  let loginFormDiv = document.createElement("div");
  loginFormDiv.className = "form-element";
  let loginFormInput = document.createElement("input");
  loginFormInput.type = "text";
  loginFormInput.name = "username";
  loginFormInput.id = "username";
  loginFormInput.required;

  let passwordDiv = document.createElement("div");
  passwordDiv.className = "form-element";
  let loginFormInputPassword = document.createElement("input");
  loginFormInputPassword.name = "password";
  loginFormInputPassword.id = "password";
  loginFormInputPassword.required;
  loginFormInputPassword.setAttribute("type", "password");

  let submitButton = document.createElement("button");
  submitButton.className = "submit-btn";
  submitButton.innerText = "Sign In";
  submitButton.addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = state.users.find(
      (user) => user.email === username && user.password === password
    );
    if (user !== undefined) {
      main.innerHTML = "";
      for (let elem of state.movies) {
        renderAMovieCard(elem);
        console.log(elem);
      }
      console.log(user.name);
      // loginText?.innerHTML = user.name;
      render();
    } else {
      alert("Invalid username or password");
    }
  });
  loginForm.append(loginFormH1, loginFormDiv, passwordDiv, submitButton);
  loginFormDiv.append(loginFormInput, loginFormInputPassword);
  passwordDiv.append(loginFormInputPassword);
  loginWrapper.append(loginForm);
  loginContainer.append(loginWrapper);
  main.append(loginContainer);
}
//

function render() {
  // clickOnLogin();
  // for (let elem of state.movies) {
  //   renderAMovieCard(elem);
  // }
  signinPage();
}
