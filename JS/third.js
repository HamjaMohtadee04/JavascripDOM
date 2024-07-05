const MainContainer = document.getElementById("main-container");
const section = document.createElement("section");
section.innerHTML = `
   <h1>places </h1>
            <ul id="places-list">
             <li class="place">comilla</li>
             <li class="place">ctg </li>
             <li class="place">mymensingh</li>
            </ul>
`
MainContainer.appendChild(section);