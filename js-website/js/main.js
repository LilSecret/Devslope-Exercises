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
let closeModal = document.querySelectorAll(modalClose);

const main = document.querySelector('main');

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

const createCardModal = (target) => {
  const modalWrapper = document.createElement('div');
  let title = target.dataset.card.charAt(0).toUpperCase() + target.dataset.card.substr(1);
  const project = target.dataset.open.slice(-1);
  const image = target.children[0].children[0].getAttribute('src').match(/(\d+)/)[0];
  const heading = target.children[0].children[1].children[1].innerHTML;
  if (title === 'Ui') {
    title = title.toUpperCase();
  }
  modalWrapper.setAttribute('id', target.dataset.open);
  modalWrapper.setAttribute('class', 'modal-wrapper full-site-modal');
  modalWrapper.setAttribute('data-animation', 'slideInOutTop');
  modalWrapper.innerHTML = `
  <div class="modal-dialogue">
  <header class="modal-header">
    <h3>${title} Project ${project}</h3>
    <i class="fas fa-times" data-close="modal-dialogue"></i>
  </header>
  <div class="modal-body">
    <div class="img-wrapper">
      <img src="./assets/images/portfolio-${image}.jpg" alt="portfolio image">
    </div>
    <div class="text-wrapper">
      <h5>${heading}</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod r adipiscing elit, sed do eiusmod</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod r adipiscing elit, sed do eiusmod</p>
    </div>
  </div>
</div>
  `
  main.appendChild(modalWrapper);
}

const removeElm = (parent, elm) => {
  setTimeout(() => {
    parent.removeChild(parent.children[elm]);
  }, 800);
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

// Link Filters 
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

for (let card of portfolioDeck) {
  card.addEventListener('click', function() {
    createCardModal(this);
  })
}


for (const elm of openModal) {
  elm.addEventListener('click', function() {
    const modalId = this.dataset.open;
    setTimeout(() => {
      document.getElementById(modalId).classList.add(isVisible);
    }, 100);
  })
}

for (const elm of closeModal) {
  elm.addEventListener("click", function() {
    setTimeout(() => {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    }, 100);
  })
}

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.full-site-modal.is-visible')) {
    e.target.classList.remove('is-visible');
    removeElm(main, main.children.length - 1);
  }
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal-wrapper.is-visible').classList.remove('is-visible');
    removeElm(main, main.children.length - 1);
  }
})