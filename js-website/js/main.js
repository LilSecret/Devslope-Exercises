const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.theme-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

// Portfolio 
const dataFilter = '[data-filter]'
const portfolioCard = '[data-card]'

const root = document.documentElement;

// Theme 
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// Portfolio
const filterLink = document.querySelectorAll(dataFilter);
const portfolioDeck = document.querySelectorAll(portfolioCard);


// Modal
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
  if(document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(`${active}`);
  }
  elm.classList.add(active);
}

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
}

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener('click', function() {
  const parent = this.parentElement;

  if(!parent.className.includes(open)) {
    parent.classList.add(open);
  } else {
    parent.classList.remove(open);
  }
})

for (let elm of switcher) {
  elm.addEventListener('click', function() {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  })
}

for (let link of filterLink) {
  link.addEventListener('click', function() {
    setActive(link, '.filter-link');
    const genre = this.dataset.filter;
    portfolioDeck.forEach((card) => {
      if (genre === 'all') {
        card.style.display = 'block';
      } 
      else if (card.dataset.card === genre) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    })
  })
}

for (const elm of openModal) {
  elm.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
}

for (const elm of closeModal) {
  elm.addEventListener("click", function() {
    this.parentElement.parentElement.classList.remove(isVisible);
  })
}