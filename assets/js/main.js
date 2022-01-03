
/*===== MENU SHOW =====*/
const showMobileNav = (toggleId, navId) =>
{
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if (toggle && nav)
	{
		toggle.addEventListener('click', () =>
		{
			toggle.classList.toggle("rotate");
			nav.classList.toggle('show');
		});
	}
};
showMobileNav('nav-toggle', 'nav-menu');


const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// const π=(el)=>{
// 	return document.querySelector(el);
//  }
 
//  let menuToggler=π(".menu-toggler");
//  const togglerLines=document.querySelectorAll(".toggler-line");
//  const togglerLinesTransitions=["rot45deg","_width","rot-45deg"];
//  let navBar=π(".bar");
 
//  menuToggler.addEventListener('click',()=>{
// 	menuToggler.classList.toggle('rotate');
	
// 	togglerLines.forEach(line=>{
// 	   togglerLinesTransitions.forEach(trans=>{
// 		  line.classList.toggle(trans);
// 	   })
// 	})
	
// 	navBar.classList.toggle('display')
//  })

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 400}); 
sr.reveal('.home__img',{delay: 600});
sr.reveal('.home__data p',{delay: 300});
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{delay: 200}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 



// const cover = document.querySelector('.toggle-container input');

// document.addEventListener('DOMContentLoaded', () => {
// 	let darkMode = false;
// 	const toggle = document.getElementById('toggle');
// 	console.log(localStorage.getItem('data-theme'));
// 	console.log(localStorage.getItem('checked'));
	

	//preference from localStorage should overwrite
// 	if (localStorage.getItem('data-theme') === 'dark') {
// 		darkMode = true;
// 		toggle.checked = true;
// 	} else if (localStorage.getItem('data-theme') === 'light') {
// 		darkMode = false;
// 		toggle.checked = false;
// 	}

// 	if (darkMode) {
// 		document.body.setAttribute('data-theme', 'dark');
// 	}

// 	cover.addEventListener('change', (e) => {
// 		if (e.target.checked) {
// 			document.body.setAttribute('data-theme', 'dark');
// 			localStorage.setItem('data-theme', 'dark');
// 			toggle.checked = true;
// 			localStorage.setItem('checked', 'checked');
// 		} else {
// 			document.body.setAttribute('data-theme', 'light');
// 			localStorage.setItem('data-theme', 'light');
// 			toggle.checked = false;
// 			localStorage.setItem('checked', 'unchecked');
// 		}
// 	});
// });
	


// typing text animation script
var typed = new Typed(".type", {
	strings: ["A FrontEnd Software Engineer", "An IT Systems Engineer","A Mobile App Developer", "An IT Consultant", "A Seasoned Tutor"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});



const themeToggle = document.getElementById('theme-toggle')
const darkTheme = 'dark-theme'
const ligthTheme = 'uil-lightbulb-alt'
// local storage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
// current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeToggle.classList.contains(ligthTheme) ? 'uil-moon' : 'uil_sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeToggle.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](ligthTheme)
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeToggle.classList.toggle(ligthTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});

(function () {
        var options = {
            whatsapp: "+2348112785465", // WhatsApp number
            call_to_action: "Send me a Private message", // Call to action
            position: "left", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
