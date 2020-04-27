class ZoomImages {
  constructor(numberZoom, image, pagComicBig, countDouble) {
    this.countZoom = 0;
    this.countDouble = 0;
    this.image = image;
    this.newPagComicBig = pagComicBig + 1;
    this.numberZoom = numberZoom;
  }

  createPageWidthZero() {
    if (this.newPagComicBig < 10) {
      this.newPagComicBig = `0${NewPagComicBig}`;
    }
  }

  mangeZooms() {
    if (this.countZoom === 1) {
      if (countDouble === 1) {
      } else {
      }
    } else {
      if (countDouble === 1) {
      } else {
      }
    }
  }

  deleteZoomDouble() {}
  deleteZoomSimple() {}
  createZoomDouble() {
    this.countZoom = 0;
    iconZoom.className = 'sprite-zoom icons-menu active-icon';
    const sizeWindow = screen.height;
    document.getElementById('zoom').className = 'containerZoom01';
    document.getElementById('zoom').innerHTML = `
      <img id="imgZoom01" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${
      imgBig[indexPage + indexPage]
    }" alt="zoom" />
      <img id="imgZoom02" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${
      imgLittle[indexPage + indexPage + 1]
    }" alt="zoom" />
      `;
  }
  createZoomSimple() {
    if (this.countZoom === 1) {
      if (countDouble === 1) {
      } else {
        this.countZoom = 0;
        iconZoom.className = 'sprite-zoom icons-menu active-icon';
        const sizeWindow = screen.height;
        document.getElementById('zoom').className = 'containerZoom01';
        document.getElementById('zoom').innerHTML = `
          <img id="imgZoom01" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${
          imgBig[indexPage + indexPage]
        }" alt="zoom" />
          <img id="imgZoom02" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${
          imgLittle[indexPage + indexPage + 1]
        }" alt="zoom" />
          `;
      }
    } else {
      if (countDouble === 1) {
        var elem = document.getElementById('imgZoom');
        elem.parentNode.removeChild(elem);
        iconZoom.className = 'sprite-zoom icons-menu';
        this.countZoom = 1;
      } else {
        var elem01 = document.getElementById('imgZoom01');
        var elem02 = document.getElementById('imgZoom02');
        elem01.parentNode.removeChild(elem01);
        elem02.parentNode.removeChild(elem02);
        iconZoom.className = 'sprite-zoom icons-menu';
        this.countZoom = 1;
      }
    }
  }
}
