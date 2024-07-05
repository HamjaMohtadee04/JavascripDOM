const sectionlist = document.querySelectorAll('section');
for (const section of sectionlist){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray';
}

// const placecontainer = document.getElementById("places-container");
// placecontainer.style.backgroundColor= "yellow";
const placecontainer = document.getElementById("places-container");
placecontainer.classList.add('yellow-bg');
 placecontainer.classList.remove('large-text');