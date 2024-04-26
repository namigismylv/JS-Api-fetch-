fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7d106634")
.then((response)=>response.json())
.then((data)=>{
    const poster=document.getElementById("poster")
    function renderUI(cards){
         poster.innerHtml=""
             poster.innerHtml +=`
             <div class="poster__top">
                     <input type="text">
                     <button>Search</button>
                 </div>
                 <div class="poster__middle">
                     <div class="poster__middle__left">
                         <img src="https://m.media-amazon.com/images/I/71M8YFEakfL._AC_UF894,1000_QL80_.jpg" alt="">
                     </div>
                     <div class="poster__middle__right">
                         <h1>${cards.Title}</h1>
                         <div class="rating">
                             <i class="fa-solid fa-star"></i>
                             <p>8.1</p>
                         </div>
                         <div class="poster__middle__right__m">
                             <p>TV-14</p>
                             <p>2022-</p>
                             <p>N/A</p>
                         </div>
                         <div class="genree">
                             <p class="">Comedy</p>
                             <p>Crime</p>
                             <p>Fantasy</p>
                         </div>
                     </div>
         
                 </div>
                 <div class="poster__body">
                     <div class="plot">
                         <h3>Plot:</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, placeat.</p>
                     </div>
                     <div class="actors">
                         <h3>Cast:</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, placeat.</p>
                     </div>
                 </div>
             
             `
            
         }

         renderUI(data)
    })