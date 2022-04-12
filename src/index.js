const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const allNav = document.querySelectorAll('nav a');
// console.log(allNav);
const allKeys = Object.keys(siteContent.nav);
// console.log(allKeys);
allNav.forEach((link, index) => {
  link.classList.add('italic')
  link.textContent = siteContent.nav[allKeys[index]]
});

const ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector('.cta-text button')
ctaBtn.textContent = siteContent.cta.button;

const textContent =  document.querySelectorAll('.text-content');



textContent[0].firstElementChild.textContent = siteContent['main-content']['features-h4'];
textContent[0].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['features-content'];

textContent[1].firstElementChild.textContent = siteContent['main-content']['about-h4'];
textContent[1].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['about-content'];

textContent[2].firstElementChild.textContent = siteContent['main-content']['services-h4'];
textContent[2].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['services-content'];

textContent[3].firstElementChild.textContent = siteContent['main-content']['product-h4']
textContent[3].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['product-content'];

textContent[4].firstElementChild.textContent = siteContent['main-content']['vision-h4'];
textContent[4].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['vision-content'];

const contactInformation = document.querySelector('.contact');

contactInformation.firstElementChild.textContent = siteContent['contact']['contact-h4'];
contactInformation.firstElementChild.nextElementSibling.textContent = siteContent['contact']['address'];
contactInformation.firstElementChild.nextElementSibling.nextElementSibling.textContent = siteContent['contact']['phone'];
contactInformation.lastElementChild.textContent = siteContent['contact']['email'];


const footer = document.querySelector('footer a');
footer.textContent = siteContent['footer']['copyright'];
footer.classList.add('bold')

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = 'http://localhost:9000/img/cta.png';

const middleImage = document.querySelector('#middle-img');
middleImage.src = 'http://localhost:9000/img/accent.png';

const logoImage = document.querySelector('#logo-img');
logoImage.src = 'http://localhost:9000/img/logo.png'

// console.log('project wired!')
