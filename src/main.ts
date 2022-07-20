
import './style.css'
let state = {
  movies: [],
  users : [
    {
      email: "john@john.com",
      password: "john",
    },
    {
      email: "jane@jane.com",
      password: "jane",
    }
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

fetch('https://moviesdatabase.p.rapidapi.com/titles?info=mini_info&limit=20&page=1&titleType=movie&genre=Action&year=2022', options)
	.then(response => response.json())
	.then(response => {
    state.movies = response.results;
    render();
    console.log(response);
    console.log(state.movies);
    }
  )


let header = document.querySelector("#header");
let maincontainer = document.querySelector("#main-container")
let main = document.querySelector("#main");

// function renderMainPage(){

//     header.innerHTML = "";
//     main.innerHTML = "";

//     let headerdiv = document.createElement('div');
//     headerdiv.className = "logo-text";
//     let imgEL = document.createElement('img');
//     imgEL.src = "./img/netflix-82871.png";
//     imgEL.className = "logoimg"
    

//     let divheaderlink = document.createElement('div');
//     divheaderlink.className = "header-links";
    

//     let ulel = document.createElement('ul');
//     ulel.className = "header-ul";
//     let liel = document.createElement('li');
//     let buttonel = document.createElement('button');
//     buttonel.className = "menu-link";
//     buttonel.type = "button";
//     buttonel.innerText = "Sign In";
 
//     let divofmain = document.createElement('div');


    

//     divofmain.className = "containeri";
//     let h1el = document.createElement("h1");
//     h1el.innerText = "Unlimited movies, TV shows, and more. ";
//     let h3el = document.createElement("h3");
//     h3el.innerText = "Watch anywhere. Cancel anytime.";
//     let pel = document.createElement("p");
//     pel.innerText = "Ready to watch? Enter your email to create or restart your membership.";
//     let formel = document.createElement("form");
//     formel.className = "container";
//     formel.action = "#";
//     let formh1 = document.createElement("h1");
//     formh1.innerText = "Sign Up";
//     let formelementdiv = document.createElement("div");
//     formelementdiv.className = "form-element";
//     let inputform = document.createElement("input");
//     inputform.type = "text";
//     inputform.name = "username";
//     inputform.id="username";
//     inputform.required;
//     let formlabel = document.createElement("label");
//     formlabel.className = "floating-label";
//     formlabel.htmlFor= "username";
//     formlabel.innerText = "Email or Phone Number";
    

//     let pswdiv = document.createElement("div");
//     pswdiv.className = "form-element";
    

//     let inputpsw = document.createElement("input");
//     inputpsw.name = "password";
//     inputpsw.id = "password";
//     inputpsw.required;
//     inputpsw.setAttribute("type","password");

//     let pswlabel = document.createElement("label");
   
//     pswlabel.className = "floating-label";
//     pswlabel.htmlFor = "password";
//     pswlabel.innerText = "Password";
//     let buttonsignup = document.createElement("button");
//     buttonsignup.className = "btn";
    
//     buttonsignup.innerText = "Sign Up";

//     header?.append(headerdiv,divheaderlink);
//     headerdiv.append(imgEL);
//     liel.append(buttonel);
//     ulel.append(liel);
//     divheaderlink.append(ulel);

//     main?.append(divofmain);
//     divofmain.append(h1el,h3el,pel,formel,);
//     formelementdiv.append(inputform,formlabel);
//     pswdiv.append(inputpsw,pswlabel);
//     formel.append(formh1,formelementdiv,pswdiv,buttonsignup);
//     buttonel.addEventListener("click",signinPage)
    


// }

// function signinPage(){
//     header.innerHTML = "";
//     main.innerHTML = "";
//     let headerdiv = document.createElement('div');
// headerdiv.className = "logo-text";
// let imgEL = document.createElement('img');
// imgEL.src = "./img/netflix-82871.png";
// imgEL.className = "logoimg"


// let divheaderlink = document.createElement('div');
// divheaderlink.className = "header-links";


// let ulel = document.createElement('ul');
// ulel.className = "header-ul";
// let liel = document.createElement('li');
// let buttonel1 = document.createElement('button');
// buttonel1.className = "menu-link";
// buttonel1.type = "button";
// buttonel1.innerText = "Sign Up";




// let divofmain = document.createElement('div');




// divofmain.className = "containeri";

// let formel = document.createElement("form");
// formel.className = "container";
// formel.action = "#";
// let formh1 = document.createElement("h1");
// formh1.innerText = "Sign In";
// let formelementdiv = document.createElement("div");
// formelementdiv.className = "form-element";
// let inputform = document.createElement("input");
// inputform.type = "text";
// inputform.name = "username";
// inputform.id="username";
// inputform.required;
// let formlabel = document.createElement("label");
// formlabel.className = "floating-label";
// formlabel.htmlFor= "username";
// formlabel.innerText = "Email or Phone Number";


// let pswdiv = document.createElement("div");
// pswdiv.className = "form-element";


// let inputpsw = document.createElement("input");
// inputpsw.name = "password";
// inputpsw.id = "password";
// inputpsw.required;
// inputpsw.setAttribute("type","password");

// let pswlabel = document.createElement("label");

// pswlabel.className = "floating-label";
// pswlabel.htmlFor = "password";
// pswlabel.innerText = "Password";
// let buttonsignup = document.createElement("button");
// buttonsignup.className = "btn";
// buttonsignup.innerText = "Sign In";



// header?.append(headerdiv,divheaderlink);
// headerdiv.append(imgEL);
// liel.append(buttonel1);
// ulel.append(liel);
// divheaderlink.append(ulel);

// main?.append(divofmain);
// divofmain.append(formel,);
// formelementdiv.append(inputform,formlabel);
// pswdiv.append(inputpsw,pswlabel);
// formel.append(formh1,formelementdiv,pswdiv,buttonsignup);


// buttonel1.addEventListener("click",renderMainPage)


// }

function renderHeader(){
  let movieContainer = document.querySelector(".main-container");

  // <!-- <div class="logo-text"><img src="./img/netflix-82871.png" class="logoimg">
  let headerdiv = document.createElement('div');
  headerdiv.className = "logo-text";
  let imgEL = document.createElement('img');
  imgEL.src = "./img/netflix-82871.png";
  imgEL.className = "logoimg"
  //       </div>

  //       <div class="header-links">
  let divheaderlink = document.createElement('div');
  divheaderlink.className = "header-links";
  //       <ul class="header-ul">
  let ulel = document.createElement('ul');
  ulel.className = "header-ul";
  //       <li>
  let liel = document.createElement('li');
  //       <button class="menu-link">Sign Up</button>
  let buttonel = document.createElement('button');
  buttonel.className = "menu-link";
  buttonel.type = "button";
  buttonel.innerText = "Account";
  //         <ul class="header-ul">
  //           <li>
  //             <button class="menu-link" type="button">Sign In</button>
  //           </li>
  //         </ul>
  //       </div> -->
  headerdiv.append(imgEL);
  liel.append(buttonel);
  ulel.append(liel);
  divheaderlink.append(ulel);
  movieContainer.append(headerdiv,divheaderlink);
}
// need work on this function
function renderAMovieCard(source) {
  let movieContainer = document.querySelector(".main-container");
  // let main = document.querySelector("main");
  // main.innerHTML = "";

  let movieCard = document.createElement("div");
  movieCard.classList.add("single-movie-card");
  movieCard.addEventListener("click", function () {
    renderMovieDetails(source);
  })

  let cardImg = document.createElement("img");
  cardImg.className = "card-img";
  cardImg.src = source.primaryImage.url;






  movieCard.append(cardImg);

  movieContainer.appendChild(movieCard);
}
function renderMovieDetails(api){
  let movieContainer = document.querySelector(".main-container");
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

  let goBack = document.createElement("button");
  goBack.classList.add("go-back");
  goBack.innerText = "↩️ Go Back";
  goBack.addEventListener("click", function () {
    location.reload();
  })

  movieDetailsContainer.append(
    movieTitle,
    movieYear,
    watchNow,
    goBack
  );

  movieDetails.append(movieImg, movieDetailsContainer);

  movieContainer.appendChild(movieDetails);
}

  //

function render() {
  // let movieContainer = document.querySelector(".main-container");
  // movieContainer.innerHTML = "";
  // if(state.users[0].email === "john@john.com"){
  //   // renderHeader();
    for (let elem of state.movies) {
      renderAMovieCard(elem);
  }
  // }else{

    
  // }

  // renderMainPage();
}

// render();
