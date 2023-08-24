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
const dataFilter = '[data-filter]';
const portfolioCard = '[data-card]';
const portfolio = '[data-grid]';
const webHeadings = ['Green Circle', 'Web Responsive', 'Computer Development', 'Compatible Website'];
const appHeadings = ['Shopping Easy', 'New VPN Browsing'];
const uiHeadings = ['Connect to Us', 'Our App'];

const root = document.documentElement;

// Theme 
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// Portfolio
const filterLink = document.querySelectorAll(dataFilter);
const portfolioDeck = document.querySelectorAll(portfolioCard);
const searchBox = document.querySelector('#search');

const portfolioGrid = document.querySelector(portfolio);


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

const addPortfolioCard = (type, num, genre, title) => {
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const img = document.createElement('img');
  const popup = document.createElement('a');
  const span = document.createElement('span');
  const heading = document.createElement('h4');
  card.setAttribute('data-card', type);
  card.setAttribute('class', 'portfolio-card');
  cardBody.setAttribute('class', 'card-body');
  img.setAttribute('src', `./assets/images/portfolio-${num}.jpg`);
  img.setAttribute('alt', 'portfolio img');
  popup.setAttribute('class', 'card-popup-box');
  popup.setAttribute('href', '#');
  span.innerHTML = genre;
  heading.innerHTML = title;
  popup.appendChild(span);
  popup.appendChild(heading);
  cardBody.appendChild(img);
  cardBody.appendChild(popup);
  card.appendChild(cardBody);
  portfolioGrid.appendChild(card);
}

const buildPortfolioDeck = () => {
  let num = 0;
  for (let heading of webHeadings) {
    num++;
    addPortfolioCard('web', num, 'Web <br> Development', heading);
  }
  for (let heading of appHeadings) {
    num++;
    addPortfolioCard('app', num, 'App <br> Development', heading)
  }
  for (let heading of uiHeadings) {
    num++;
    addPortfolioCard('ui', num, 'UI / UX Design', heading);
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

searchBox.addEventListener('keyup', (e) => {
  const searchWord = e.target.value.toLowerCase().trim();
  portfolioDeck.forEach((card) => {
    if (card.dataset.card.includes(searchWord)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  })
})

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
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  })
}