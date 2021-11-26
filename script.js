document.addEventListener("DOMContentLoaded",function(){
    
  var catcollection = document.getElementById("cat-collection");
  var catdiv ;
  const catForm = document.querySelector(".container");
  let toys ;

  const url = "https://cataas.com/api/cats";
  
  function rendercat(toy){
      catdiv = document.createElement('div');
      catdiv.className = "card";
      catdiv.innerHTML = `
      <h6>Id : ${toy.id}</h6>
      <h6>Date : ${toy.created_at}</h6>
      <h6>Tags : ${toy.tags}</h6>
      <button id=${toy.id}>"https://cataas.com/cat/${toy.id}"</button>
      <div id=${toy.created_at} class="modal">
       <div class="modal-content">
       <span class=${toy.created_at}>&times;</span>
      <img src ="https://cataas.com/cat/${toy.id}" id="img3"/>
      </div>
     </div>
     <br><br>
     `
     catcollection.append(catdiv);

     var modal = document.getElementById(toy.created_at);
     
     var span = document.getElementsByClassName(toy.created_at)[0];

     var btn = document.getElementById(toy.id);

     btn.onclick = function() {
         modal.style.display = "block";
     }
      
  
      span.onclick = function() {
          modal.style.display = "none";
      }
      
  }
      

      let search = document.getElementById("search-box")
      search.addEventListener("keyup",function(){
          let textentered = search.value;

          console.log(textentered);
          if(textentered != ""){
              fetchdata("?tags="+textentered);
          }
          else{
              fetchdata(null);
          }
          renderAll();
          document.getElementById("cat-collection").innerHTML = ``;
      })
  
  
 

  function renderAll() {
      console.log(toys);
      toys.forEach((toy) => rendercat(toy));
  }
  const fetchdata = async (search) =>{
      try{
          const response = await fetch(search != null ? url+search : url);
          const cats = await response.json()
          .then((gtoys) => toys = gtoys)
          renderAll(toys);
      }    catch(err){
          console.log(err);
      }
  }
 fetchdata(null)
  
});