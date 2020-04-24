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
            <img src=${element} alt="página ${index}" />
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
  let pages = document.getElementById('pages');
  let btnPages = document.getElementById('btnPages');
  let btnDouble = document.getElementById('btnDouble');
  let iconPages = document.getElementById('icon-pages');
  let iconDouble = document.getElementById('icon-double');
  let iconZoom = document.getElementById('icon-zoom');
  let pagComicBig = 0;
  let count = 1;
  let countZoom = 1;

  // BLOQUER BOTON DEERECHO
  document.oncontextmenu = function () {
    return false;
  };

  // COUNTER --- counter page of comic
  document.getElementById(
    'counterNumber'
  ).innerHTML = `Página 1 de ${imgBig.length}`;

  var flkty = new Flickity('.carousel ');

  flkty.on('settle', function (index) {
    document.getElementById('counterNumber').innerHTML = `Página ${
      index + 1
    } de ${imgBig.length}`;

    pagComicBig = index + 1;
  });

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

    console.log(count, numberImages / 2);
    if (count === 1) {
      iconDouble.className = 'sprite-two-pages icons-menu active-icon';
      count = 0;
      let newIndexBg;
      let newIndexLt;

      //creation de double page with Big Data
      imgBig.map((element, index) => {
        index = index + 1;
        if (index < 10) {
          newIndexBg = 'lt' + `0${index}`;
        } else {
          newIndexBg = 'lt' + index;
        }
        if (index <= Math.round(numberImages / 2)) {
          const bgPhoto = () => {
            document.getElementById(
              newIndexBg
            ).innerHTML = ` <div class="container-double">
            <div class="wrapperDouble">
            <img class="imagen01" 
            src="${imgBig[index + index - 2]}" alt="página " />
            </div>
            <div class="wrapperDouble">
            <img class="imagen02" src="${
              imgBig[index + index - 1]
            }" alt="página "/>
            </div>
          </div>
          `;
            document.getElementById(newIndexBg).style.width = '200px';
          };
          return bgPhoto();
        } else {
          var elemBg = document.getElementById(newIndexBg);
          elemBg.parentNode.removeChild(elemBg);
        }
        var flktyMain = new Flickity('.carousel-main');
        flktyMain.resize();
        flktyMain.reposition();
      });

      //creation de double page with Little Data
      imgLittle.map((element, index) => {
        index = index + 1;
        if (index < 10) {
          newIndexLt = 'bg' + `0${index}`;
        } else {
          newIndexLt = 'bg' + index;
        }
        if (index <= Math.round(numberImages / 2)) {
          const ltPhoto = () => {
            document.getElementById(
              newIndexLt
            ).innerHTML = ` <div class="container-double">
            <div class="wrapperDouble">
              <img class="imagen01"  
              src="${imgBig[index + index - 2]}" alt="página " />
            </div>
            <div class="wrapperDouble">
              <img class="imagen02" src="${
                imgBig[index + index - 1]
              }" alt="página "/>
            </div>
          </div>
          `;
          };
          return ltPhoto();
        } else {
          var elemLt = document.getElementById(newIndexLt);
          elemLt.parentNode.removeChild(elemLt);
        }
        //TODO necesito recargar el menu pero no se como
        var flktyNav = new Flickity('.carousel-nav');
        flktyNav.resize();
        flktyNav.reposition();
      });
    } else {
      // TODO - Create the simple page in the same way than DOUBLE
      location.reload();
    }
  });

  //  ZOOM CREATION FOR SIMPLE PAGE
  //TODO create zoom for Double Page
  btnZoom.addEventListener('click', () => {
    let NewPagComicBig = pagComicBig + 1;

    if (NewPagComicBig < 10) {
      NewPagComicBig = `0${NewPagComicBig}`;
    }
    if (countZoom === 1) {
      countZoom = 0;
      iconZoom.className = 'sprite-zoom icons-menu active-icon';
      const sizeWindow = screen.height;
      const sizeWindowZoom = document.getElementById('zoom').width;
      console.log(NewPagComicBig, sizeWindow, sizeWindowZoom);
      document.getElementById('zoom').className = 'containerZoom01';
      document.getElementById('zoom').innerHTML = `
      <img id="imgZoom" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${imgBig[pagComicBig]}" alt="zoom" />
      `;
    } else {
      var elem = document.getElementById('imgZoom');
      elem.parentNode.removeChild(elem);
      iconZoom.className = 'sprite-zoom icons-menu';
      countZoom = 1;
    }
  });
};
