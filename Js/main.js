
  const createComic = ()=> {
    document.getElementById("pages").innerHTML = `<div
    class="carousel carousel-nav"
    data-flickity='{ "asNavFor": ".carousel-main", "contain": true, "pageDots": false }'
    > ` + 
    imgBig.map((element, index) => {
      index = index +1
      if(index < 10 ) { index = `0${index}`}
      console.log(imgBig)
      return(`<div key=${index} class="carousel-cell">
            <img src=${element} alt="pagian ${index}" />
            <br />
            <p class="number">${index}</p>
          </div>`
      )  
    }).join('') + ` </div>`
  }
  
  createComic()

window.onload = ()=> {

  let pages = document.getElementById("pages")
  let btn_pages = document.getElementById("btn_pages");
  let iconPages =document.getElementById("icon-pages")

  document.getElementById("counterNumber").innerHTML = `Página 1 de ${imgBig.length}`

  var flkty = new Flickity('.carousel');
  flkty.on( 'settle', function( index ) {
    document.getElementById("counterNumber").innerHTML = `Página ${index+1} de ${imgBig.length}`
  });



  btn_pages.addEventListener("click", () => {
    if (pages.classList.contains('pages-hidden') ){
      pages.className = "pages-view";  
      iconPages.className -= "active"; 
     
    } else {
      iconPages.className += "active";  
    }
  });





}
