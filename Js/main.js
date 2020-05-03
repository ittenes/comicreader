const createComicLittle = () => {
  document.getElementById('pages').innerHTML =
    `<div
    class="carousel carousel-nav"
    data-flickity='{ "asNavFor": ".carousel-main", "contain": true, "pageDots": false }'
    > ` +
    imgLittle
      .map((element, index) => {
        index = index + 1;
        if (index < 10) {
          index = `0${index}`;
        }

        return `<div id=lt${index} class="carousel-cell">
            <img src=${element} alt="página ${index}" />
            <br />
            <p class="number">${index}</p>
          </div>`;
      })
      .join('') +
    ` </div>`;
};

const createComicBig = () => {
  document.getElementById('comicBig').innerHTML =
    ` ` +
    imgBig
      .map((element, index) => {
        index = index + 1;
        if (index < 10) {
          index = `0${index}`;
        }

        return `<div id=bg${index} class="carousel-cell"> 
            <img  class="new-size-zoom0" src=${element} alt="página ${index}" />
          </div>`;
      })
      .join('');
};

createComicBig();

createComicLittle();

let pagCommicBig = 0;

let resizeWindow = () => {
  console.log('estoy en ello');

  window.resizeBy(-10, -10);
};

window.onload = () => {
  document.querySelector(".title-comic").innerHTML = comicName;
  let pages = document.getElementById('pages');
  let btnPages = document.getElementById('btnPages');
  let btnDouble = document.getElementById('btnDouble');
  let iconPages = document.getElementById('icon-pages');
  let iconDouble = document.getElementById('icon-double');
  let iconZoom = document.getElementById('icon-zoom');
  let comicBig = document.getElementById('comicBig');
  let pagComicBig = 1;
  let countDouble = 1;
  let countZoom = 0;
  let indexPage = 0;

  /////////////
  var flkty = new Flickity('.carousel ');
  var flktyMain = new Flickity('.carousel-main', { lazyLoad: true });
  var flktyNav = new Flickity('.carousel-nav');

  // CLASS

  let zoomImages = new ZoomImages();

  document.oncontextmenu = function () {
   return false;
  };

  // COUNTER --- counter page of comic
  document.getElementById(
    'counterNumber'
  ).innerHTML = `Página 1 de ${imgBig.length}`;

  flkty.on('change', function (index) {
    document.getElementById('counterNumber').innerHTML = `Página ${
      index + 1
    } de ${flkty.cells.length}`;
    indexPage = index;
    pagComicBig = index + 1;
  });

  // SPINNER

  // MENU SELECT PAGE -  Menu pages controls View-Hide
  btnPages.addEventListener('click', () => {
    if (pages.classList.contains('pages-hidden')) {
      pages.className = 'pages-view';
      iconPages.className = 'sprite-pages icons-menu active-icon';
    } else {
      pages.className = 'pages-hidden';
      iconPages.className = 'sprite-pages icons-menu';
    }
  });

  // CREATION DE DOUBLE PAGE - create double list based in data
  btnDouble.addEventListener('click', () => {
    let numberImages = imgBig.length;

    if (countDouble === 1) {
      iconDouble.className = 'sprite-two-pages icons-menu active-icon';
      countDouble = 0;
      let newIndexBg;
      let newIndexLt;

      //creation de double page with Big Data
      imgBig.map((element, index) => {
        index = index + 1;
        if (index < 10) {
          newIndexBg = 'bg' + `0${index}`;
        } else {
          newIndexBg = 'bg' + index;
        }
        if (index <= Math.round(numberImages / 2)) {
          const bgPhoto = () => {
            document.getElementById(
              newIndexBg
            ).innerHTML = ` <div class="container-double">
            <div class="wrapperDouble">
            <img class="imagen01" 
            data-flickity-lazyload="${
              imgBig[index + index - 2]
            }" alt="página " />
            </div>
            <div class="wrapperDouble">
            <img class="imagen02" data-flickity-lazyload="${
              imgBig[index + index - 1]
            }" alt="página "/>
            </div>
          </div>
          `;
          };
          return bgPhoto();
        } else {
          var elemBg = document.getElementById(newIndexBg);
          //elemBg.parentNode.removeChild(elemBg);
          flktyMain.remove(elemBg);
        }
        // Reload de carousel main

        flktyMain.resize();
        flktyMain.reposition();
      });

      //creation de double page with Little Data
      imgLittle.map((element, index) => {
        index = index + 1;
        if (index < 10) {
          newIndexLt = 'lt' + `0${index}`;
        } else {
          newIndexLt = 'lt' + index;
        }
        if (index <= Math.round(numberImages / 2)) {
          const ltPhoto = () => {
            document.getElementById(
              newIndexLt
            ).innerHTML = ` <div class="container-double">
            <div class="wrapperDouble">
              <img class="imagen01"  
              src="${imgLittle[index + index - 2]}" alt="página " />
            </div>
            <div class="wrapperDouble">
              <img class="imagen02" src="${
                imgLittle[index + index - 1]
              }" alt="página "/>
            </div>
          </div>
          `;
            document.getElementById(newIndexLt).style.width = '200px';
          };
          return ltPhoto();
        } else {
          var elemLt = document.getElementById(newIndexLt);
          //elemLt.parentNode.removeChild(elemLt);
          flktyNav.remove(elemLt);
        }
        // Reload de carousel Nav

        flktyNav.resize();
        flktyNav.reposition();
      });
      flktyMain.select(Math.round(pagComicBig / 2) - 1);
      console.log('esto' + pagComicBig);
    } else {
      // TODO - Create the simple page in the same way than DOUBLE
      location.reload();
    }
  });

  //  ZOOM CREATION FOR SIMPLE PAGE
  //TODO create zoom for Double Page
  btnZoom.addEventListener('click', () => {
    if (countZoom === 1) {
      countZoom = 0;
      iconZoom.className = 'sprite-zoom icons-menu';
      comicBig.style.height = '';
      document.querySelectorAll('.new-size-zoom1 ').forEach((img) => {
        img.className = 'new-size-zoom0';
      });
    } else {
      countZoom = 1;
      iconZoom.className = 'sprite-zoom icons-menu active-icon';
      comicBig.style.height = '2000px';
      document.querySelectorAll('.carousel-main img').forEach((img) => {
        img.className += 'new-size-zoom1';
      });
    }

    // let NewPagComicBig = pagComicBig + 1;
    // if (NewPagComicBig < 10) {
    //   NewPagComicBig = `0${NewPagComicBig}`;
    // }
    // if (countZoom === 1) {
    //   if (countDouble === 1) {
    //     countZoom = 0;
    //     iconZoom.className = 'sprite-zoom icons-menu active-icon';
    //     const sizeWindow = screen.height;
    //     console.log(NewPagComicBig, sizeWindow);
    //     document.getElementById('zoom').className = 'containerZoom01';
    //     document.getElementById('zoom').innerHTML = `
    //     <img id="imgZoom" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${
    //       imgBig[pagComicBig - 1]
    //     }" alt="zoom" />
    //     `;
    //   } else {
    //     countZoom = 0;
    //     iconZoom.className = 'sprite-zoom icons-menu active-icon';
    //     const sizeWindow = screen.height;
    //     console.log(NewPagComicBig, sizeWindow);
    //     document.getElementById('zoom').className = 'containerZoom01';
    //     document.getElementById('zoom').innerHTML = `
    //     <img id="imgZoom01" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${
    //       imgBig[indexPage + indexPage]
    //     }" alt="zoom" />
    //     <img id="imgZoom02" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${
    //       imgBig[indexPage + indexPage + 1]
    //     }" alt="zoom" />
    //     `;
    //   }
    // } else {
    //   if (countDouble === 1) {
    //     var elem = document.getElementById('imgZoom');
    //     elem.parentNode.removeChild(elem);
    //     iconZoom.className = 'sprite-zoom icons-menu';
    //     countZoom = 1;
    //   } else {
    //     var elem01 = document.getElementById('imgZoom01');
    //     var elem02 = document.getElementById('imgZoom02');
    //     elem01.parentNode.removeChild(elem01);
    //     elem02.parentNode.removeChild(elem02);
    //     iconZoom.className = 'sprite-zoom icons-menu';
    //     countZoom = 1;
    //   }
    // }
  });
};
