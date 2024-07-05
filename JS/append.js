//where to add
const PlacesList =document.getElementById("places-list");
// console.log(PlacesList);

//what to be added
const Li = document.createElement('li');
Li.innerText = "modhuban";
 
//add the child

PlacesList.appendChild(Li);

//new section
const MainContainer = document.getElementById("main-container");


const Section = document.createElement('section');
const H1 = document.createElement("h1");
H1.innerText="patarbon"
Section.appendChild(H1);

const UL = document.createElement('ul');
const LI1 = document.createElement('li');
LI1.innerText ="patarbon official"
UL.appendChild(LI1);

const LI2 = document.createElement('li');
LI2.innerText ="sattarbon official"
UL.appendChild(LI2);

const LI3= document.createElement('li');
LI3.innerText ="gattarbon official"
UL.appendChild(LI3);

Section.appendChild(UL);
MainContainer.appendChild(Section);

//set inner html directly

const sectionDress = document.createElement('section');
 sectionDress.innerHTML = `
 <h1>dresss</h1>
 <ul>
  <li>shirt</li>
  <li>genji</li>
  <li>t-shirt</li>
  <li>moja</li>
 </ul>
 `
MainContainer.appendChild(sectionDress);
