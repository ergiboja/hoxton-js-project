
import './style.css'
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