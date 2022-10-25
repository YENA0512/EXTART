const list = document.querySelector('.slide__list');
const items = document.querySelectorAll('.slide__item');
const buttons = document.querySelector('.buttons');

const lastIndex = items.length - 1;
let selected = 0;
let interval;

// Util Functions
const setTransition = (value) => {
  list.style.transition = value;
};

const setTranslate = ({ index, reset }) => {
  if (reset) list.style.transform = `translate(-${list.clientWidth}px, 0)`;
  else list.style.transform = `translate(-${(index + 1) * list.clientWidth}px, 0)`;
};

const activePagination = (index) => {
  [...paginations.children].forEach((pagination) => {
    pagination.classList.remove('on');
  });
  paginations.children[index].classList.add('on');
};



// Make prev and next buttons.
const handlePrev = () => {
    selected -= 1;
    setTransition('transform 1s linear');
    setTranslate({ index: selected });
    if (selected < 0) {
      selected = lastIndex;
      setTimeout(() => {
        setTransition('');
        setTranslate({ index: selected });
      }, 1000);
    }
    if (selected >= 0) activePagination(selected);
  };
  
  const handleNext = () => {
    console.log(selected);
    selected += 1;
    setTransition('transform 1s linear');
    setTranslate({ index: selected });
    if (selected > lastIndex) {
      selected = 0;
      setTimeout(() => {
        setTransition('');
        setTranslate({ index: selected });
      }, 1000);
    }

  };
  
  const makeButton = () => {
    if (items.length > 1) {
      const prevButton = document.createElement('button');
      prevButton.classList.add('buttons__prev');
      prevButton.innerHTML = '<img src="./assets/img/arrowL.png">';
      prevButton.addEventListener('click', handlePrev);
  
      const nextButton = document.createElement('button');
      nextButton.classList.add('buttons__next');
      nextButton.innerHTML = '<img src="./assets/img/arrowR.png">';
      nextButton.addEventListener('click', handleNext);
  
      buttons.appendChild(prevButton);
      buttons.appendChild(nextButton);
    }
  };

  // Clone the first and last elements.
const cloneElement = () => {
    list.prepend(items[lastIndex].cloneNode(true));
    list.append(items[0].cloneNode(true));
    setTranslate({ reset: true });
  };


  // Automatically play the slide
const autoplayIterator = () => {
    selected += 1;
    setTransition('all 1s linear');
    setTranslate({ index: selected });
    if (selected > lastIndex) {
      clearInterval(interval);
      setTimeout(() => {
        selected = 0;
        setTransition('');
        setTranslate({ reset: true });
        autoplay({ duration: 8000 });
      }, 1000);
    }
  };
  
  const autoplay = ({ duration }) => {
    interval = setInterval(autoplayIterator, duration);
  };

  const render = () => {
    // makeButton();
    cloneElement();
    autoplay({ duration: 8000 });
  };
  render();
