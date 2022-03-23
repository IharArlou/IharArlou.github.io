let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let sliderItems = document.getElementsByClassName('feedback-slider-item');

let l = 0;
let movePer = 0;
let maxMove = 0;

if (sliderItems.length) {
  if (!l) {
    prev.style.opacity = '0.1';
  }

  for (const i of sliderItems) {
    if (movePer < (+i.offsetWidth + 120)) {
      movePer = +i.offsetWidth + 120;
    }
    maxMove += +i.offsetWidth + 120;
  }
}

let right_mover = () => {
  l = l + movePer;

  if (l >= maxMove) {
    l = 0;
    prev.style.opacity = '0.1';
  } else {
    prev.style.opacity = '1';
  }

  for (const i of sliderItems) {
    if (l >= maxMove) {
      l = 0;
      i.style.left = maxMove + 'px';
    } else {
      i.style.left = '-' + l + 'px';

    }
  }
};

let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
    prev.style.opacity = '0.1';
  }

  for (const i of sliderItems) {
    i.style.left = '-' + l + 'px';
  }
};

next.onclick = () => {
  right_mover();
};

prev.onclick = () => {
  left_mover();
};
