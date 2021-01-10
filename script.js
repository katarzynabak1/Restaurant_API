let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
    console.log("pressed")
    apiRequest()
}, false)

async function apiRequest(){
let APP_ID = "2b71d26b"
let APP_key = "0eaa0d3573ce15067df38a713c7325dd"
let input = document.getElementById("input").value
let respone = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_key}&q=${input}`);
console.log(respone)
let data = await respone.json()
console.log(data)
useData(data)
}
function useData(data){
    
    const newLocal = `
    <div class="card-group">
    <div class="card col-3 offset-1" style="width: 18rem;">
      <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${data.hits[0].recipe.label}</h5>
        <p class="card-text">Healt Labels </br> ${data.hits[0].recipe.healthLabels}</p>
     <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to recipe</a>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${data.hits[1].recipe.label}</h5>
        <p class="card-text">Health labels </br> ${data.hits[1].recipe.healthLabels}</p>
     <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Go to recipe</a>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${data.hits[2].recipe.label}</h5>
        <p class="card-text">Health labels </br> ${data.hits[2].recipe.healthLabels}</p>
     <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Go to recipe</a>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
    <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
   <div class="card-body">
    <h5 class="card-title">${data.hits[3].recipe.label}</h5>
      <p class="card-text">Health labels </br> ${data.hits[3].recipe.healthLabels}</p>
   <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Go to recipe</a>
      </div>
  </div>
    </div>
    `
    document.querySelector("#content").innerHTML = newLocal
}
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

