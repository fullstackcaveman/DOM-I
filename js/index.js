const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Nav Links
const navLinks = document.querySelectorAll('nav a');

const firstLink = document.createElement('a');
firstLink.textContent = 'Home';
firstLink.href = '#';
document.querySelector('nav').prepend(firstLink);

const lastLink = document.createElement('a');
lastLink.textContent = 'Shop';
lastLink.href = '#';
document.querySelector('nav').appendChild(lastLink);

const navLink1 = navLinks[0];
navLink1.textContent = siteContent['nav']['nav-item-1'];

const navLink2 = navLinks[1];
navLink2.textContent = siteContent['nav']['nav-item-2'];

const navLink3 = navLinks[2];
navLink3.textContent = siteContent['nav']['nav-item-3'];

const navLink4 = navLinks[3];
navLink4.textContent = siteContent['nav']['nav-item-4'];

const navLink5 = navLinks[4];
navLink5.textContent = siteContent['nav']['nav-item-5'];

const navLink6 = navLinks[5];
navLink6.textContent = siteContent['nav']['nav-item-6'];

const greenLinks = document.querySelectorAll('nav a');
greenLinks.forEach((link) => {
	link.style.color = 'green';
});

// CTA Section
// Text
const cta = document.querySelector('.cta-text h1');

ctaText = siteContent['cta']['h1'];

const newArray = ctaText.split(' ');

const word1 = newArray[0];
const word2 = newArray[1];
const word3 = newArray[2];

cta.innerHTML = `${word1}` + '<br>' + `${word2}` + '<br>' + `${word3}`;

console.log(cta);

// Button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

// Image
const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// Main Content Section
// Top Content
const leftContentH4 = document.querySelector(
	'.top-content > div:nth-child(1) > h4'
);
leftContentH4.textContent = siteContent['main-content']['features-h4'];

const leftContentP = document.querySelector(
	'.top-content > div:nth-child(1) > p'
);
leftContentP.textContent = siteContent['main-content']['features-content'];

const rightContentH4 = document.querySelector(
	'.top-content > div:nth-child(2) > h4'
);
rightContentH4.textContent = siteContent['main-content']['about-h4'];

const rightContentP = document.querySelector(
	'.top-content > div:nth-child(2) > p'
);
rightContentP.textContent = siteContent['main-content']['about-content'];

// Middle Image
const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Bottom Content
const bottomLeftH4 = document.querySelector(
	'.bottom-content > div:nth-child(1) > h4'
);
bottomLeftH4.textContent = siteContent['main-content']['services-h4'];

const bottomLeftP = document.querySelector(
	'.bottom-content > div:nth-child(1) > p'
);
bottomLeftP.textContent = siteContent['main-content']['services-content'];

const bottomMiddleH4 = document.querySelector(
	'.bottom-content > div:nth-child(2) > h4'
);
bottomMiddleH4.textContent = siteContent['main-content']['product-h4'];

const bottomMiddleP = document.querySelector(
	'.bottom-content > div:nth-child(2) > p'
);
bottomMiddleP.textContent = siteContent['main-content']['product-content'];

const bottomRightH4 = document.querySelector(
	'.bottom-content > div:nth-child(3) > h4'
);
bottomRightH4.textContent = siteContent['main-content']['vision-h4'];

const bottomRightP = document.querySelector(
	'.bottom-content > div:nth-child(3) > p'
);
bottomRightP.textContent = siteContent['main-content']['vision-content'];

// Contact Section
const contact = document.querySelector('.contact > h4');
contact.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('.contact > p:nth-child(2)');
address.textContent = siteContent['contact']['address'];

const newAddressArray = address.textContent.split(' ');

const address1 = `${newAddressArray[0]} ${newAddressArray[1]} ${newAddressArray[2]} ${newAddressArray[3]}`;
const address2 = `${newAddressArray[4]} ${newAddressArray[5]}`;

address.innerHTML = `${address1}` + '<br>' + `${address2}`;

console.log(address);

const phone = document.querySelector('.contact > p:nth-child(3)');
phone.textContent = siteContent['contact']['phone'];

const email = document.querySelector('.contact > p:nth-child(4)');
email.textContent = siteContent['contact']['email'];

// Footer
const footer = document.querySelector('footer > p');
footer.textContent = siteContent['footer']['copyright'];
