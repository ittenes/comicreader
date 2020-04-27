class ClassName {
  constructor(ctx, numberZoom, image, pagComicBig, countDouble) {
    this.ctx = ctx;
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

  createZoom() {
    if (this.countZoom === 1) {
      if (countDouble === 1) {
        this.countZoom = 0;
        iconZoom.className = 'sprite-zoom icons-menu active-icon';
        const sizeWindow = screen.height;
        console.log(NewPagComicBig, sizeWindow);
        document.getElementById('zoom').className = 'containerZoom01';
        document.getElementById('zoom').innerHTML = `
          <img id="imgZoom" class="containerZoomImg containerZoomImgVis" style="height:${sizeWindow}px;" src="${
          imgBig[pagComicBig - 1]
        }" alt="zoom" />
          `;
      } else {
        this.countZoom = 0;
        iconZoom.className = 'sprite-zoom icons-menu active-icon';
        const sizeWindow = screen.height;
        console.log(NewPagComicBig, sizeWindow);
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
