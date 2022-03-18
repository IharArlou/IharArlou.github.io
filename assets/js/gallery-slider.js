let prevImg = document.querySelector('.prev-img');
let nextImg = document.querySelector('.next-img');

let gallerySliderItems = document.getElementsByClassName('gallery-slider-item');

let leng = 0;
let movePerImg = 0;
let maxMoveImg = 0;
let index = 0;

if (gallerySliderItems.length) {
  if (!leng) {
    prevImg.style.opacity = '0.1';
  }

  for (const i of gallerySliderItems) {
    if (movePerImg < (+i.offsetWidth + 40)) {
      movePerImg = +i.offsetWidth + 40;
    }
    maxMoveImg += +i.offsetWidth + 40;
  }

  gallerySliderItems[0].style.minWidth = '480px'
}

const right_mover_img = () => {
  leng += movePerImg;

  if (leng >= maxMoveImg) {
    leng = 0;
    prevImg.style.opacity = '0.1';
    gallerySliderItems[0].style.minWidth = '480px'
    gallerySliderItems[gallerySliderItems.length - 1].style.minWidth = '380px'
  } else {
    prevImg.style.opacity = '1';
  }

  for (const i of gallerySliderItems) {
    if (leng >= maxMoveImg) {
      i.style.left = maxMoveImg + 'px';
    } else {
      i.style.left = '-' + leng + 'px';
    }
  }

  if (index < gallerySliderItems.length - 1 && leng) {
    index++
    gallerySliderItems[index - 1].style.minWidth = '380px'
    gallerySliderItems[index].style.minWidth = '480px'
  } else {
    index = 0
  }
};

const left_mover_img = () => {
  leng = leng - movePerImg;

  if (leng <= 0) {
    leng = 0;
    prevImg.style.opacity = '0.1';
  }

  for (const i of gallerySliderItems) {
    i.style.left = '-' + leng + 'px';
  }

  if (index > 0) {
    index--
    gallerySliderItems[index + 1].style.minWidth = '380px'
    gallerySliderItems[index].style.minWidth = '480px'
  } else {
    index = 0
  }

};

nextImg.onclick = () => {
  right_mover_img();
};

prevImg.onclick = () => {
  left_mover_img();
};
