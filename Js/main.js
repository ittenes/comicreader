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

let resizeW = () => {
  console.log('estoy en ello');
  window.resizeBy(0, 100);
};

window.onload = () => {
  let pages = document.getElementById('pages');
  let btnPages = document.getElementById('btnPages');
  let btnDouble = document.getElementById('btnDouble');
  let iconPages = document.getElementById('icon-pages');
  let pagComicBig = 0;
  let count = 1;
  let countZoom = 1;

  document.getElementById(
    'counterNumber'
  ).innerHTML = `Página 1 de ${imgBig.length}`;

  var flkty = new Flickity('.carousel');
  flkty.on('settle', function (index) {
    document.getElementById('counterNumber').innerHTML = `Página ${
      index + 1
    } de ${imgBig.length}`;

    pagComicBig = index + 1;
  });

  btnPages.addEventListener('click', () => {
    if (pages.classList.contains('pages-hidden')) {
      pages.className = 'pages-view';
      iconPages.className = 'sprite-pages icons-menu active-icon';
    } else {
      pages.className = 'pages-hidden';
      iconPages.className = 'sprite-pages icons-menu';
    }
  });

  btnDouble.addEventListener('click', () => {
    let numberImages = imgBig.length;

    console.log(count, numberImages / 2);
    if (count === 1) {
      count = 0;
      let newIndexBg;
      let newIndexLt;

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
            ).innerHTML = ` <div class"containerDouble">
            <img class="imagen01" 
            style=" float: left;
              max-width: 45%;
              margin-left: 5%;" 
            src="${imgBig[index + index - 2]}" alt="página " />
            <img class="imagen02" style="max-width: 45%;
            margin-left: 0%;" src="${imgBig[index + index - 1]}" alt="página "/>
          </div>
          `;
            document.getElementById(newIndexBg).style.width = '200px';
          };

          return bgPhoto();
        } else {
          var elemBg = document.getElementById(newIndexBg);
          elemBg.parentNode.removeChild(elemBg);
        }
      });

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
            ).innerHTML = ` <div class"containerDouble">
            <img class="imagen01" 
            style=" float: left;
              max-width: 45%;
              margin-left: 5%;" 
            src="${imgBig[index + index - 2]}" alt="página " />
            <img class="imagen02" style="max-width: 45%;
            margin-left: 0%;" src="${imgBig[index + index - 1]}" alt="página "/>
          </div>
          `;
          };

          return ltPhoto();
        } else {
          var elemLt = document.getElementById(newIndexLt);
          elemLt.parentNode.removeChild(elemLt);
        }
      });
      flkty.reposition();
    } else {
      location.reload();
    }
  });

  btnZoom.addEventListener('click', () => {
    let NewPagComicBig = pagComicBig + 1;

    if (NewPagComicBig < 10) {
      NewPagComicBig = `0${NewPagComicBig}`;
    }
    if (countZoom === 1) {
      countZoom = 0;
      const sizeWindow = screen.height;
      const sizeWindowZoom = document.getElementById('zoom').width;
      console.log(NewPagComicBig, sizeWindow, sizeWindowZoom);
      document.getElementById('zoom').className = 'containerZoom01';
      document.getElementById('zoom').innerHTML = `
      <img id="imgZoom" style="height:${sizeWindow}px;" src="${imgBig[pagComicBig]}" alt="zoom" />
      `;
    } else {
      var elem = document.getElementById('imgZoom');
      elem.parentNode.removeChild(elem);
      countZoom = 1;
    }
  });
};
