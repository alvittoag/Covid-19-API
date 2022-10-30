const header = document.getElementById("header");
const subHeader = document.getElementById("subHeader");
const inputButton = document.getElementById("inputButton");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const footer = document.getElementById("footer");

const fade = () => {
  setTimeout(() => {
    // body.classList.toggle("fade_out");
  }, 1000);

  setTimeout(() => {
    footer.classList.remove("slide_before");
    footer.classList.add("slide_after");
    subHeader.classList.remove("slide_before");
    subHeader.classList.add("slide_after");
    header.classList.remove("slide_afterDown");
    card1.classList.remove("slide_before");
    card1.classList.add("slide_after");
    card2.classList.remove("slide_before");
    card2.classList.add("slide_after");
    card3.classList.remove("slide_before");
    card3.classList.add("slide_after");
    card4.classList.remove("slide_before");
    card4.classList.add("slide_after");
  }, 2000);
};

fade();

// body.addEventListener("load", fade());
