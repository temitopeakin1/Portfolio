
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

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{}); 
sr.reveal('.home__img',{});
sr.reveal('.home__data p',{});
sr.reveal('.home__social-icon',{}); 

ScrollReveal().reveal('.about__img', {
    origin: 'left',
    delay: 350,
    duration: 800,
    reset: true,
    distance: '150px',
});

ScrollReveal().reveal('.about__subtitle', {
    origin: 'right',
    delay: 850,
    duration: 500,
    reset: true,
    distance: '150px',
});

ScrollReveal().reveal('.first__text', {
    origin: 'right',
    delay: 880,
    duration: 500,
    reset: true,
    distance: '150px',
});

ScrollReveal().reveal('.second__text', {
    origin: 'right',
    delay: 950,
    duration: 500,
    reset: true,
    distance: '150px',
});

/* SCROLL SKILLS*/
ScrollReveal().reveal('.stack', {
    origin: 'left',
    delay: 350,
    duration: 800,
    reset: true,
    distance: '150px',
});

ScrollReveal().reveal('.skills__container .resume__col--2', {
    origin: 'right',
    delay: 950,
    duration: 500,
    reset: true,
    distance: '150px',
});

/* SCROLL PROJECTS*/
sr.reveal('.projects',{});
sr.reveal('.projects__image', {}); 

/* SCROLL BLOG */
ScrollReveal().reveal('.subtitle', {
    origin: 'right',
    delay: 450,
    duration: 500,
    reset: true,
    distance: '150px',
});

ScrollReveal().reveal('.blog-content', {
    origin: 'right',
    delay: 800,
    duration: 500,
    reset: true,
    distance: '150px',
});

/* SCROLL CONTACT */
ScrollReveal().reveal('.left', {
    origin: 'left',
    delay: 450,
    duration: 500,
    reset: true,
    distance: '150px',
});

ScrollReveal().reveal('.right', {
    origin: 'right',
    delay: 800,
    duration: 500,
    reset: true,
    distance: '150px',
});


// typing text animation script
var typed = new Typed(".type", {
	strings: ["A FrontEnd Software Engineer", "An IT Systems Engineer","A Mobile App Developer", "An IT Consultant", "A Technical Writer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

// Begin: Theme Toggle

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

// End: Theme Toggle

// Begin :Whatsapp Link

(function () {
        var options = {
            whatsapp: "+2348112785465", // WhatsApp number
            call_to_action: "I'm your best 🔌, Send me a Private message", // Call to action
            position: "left", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
    
//End: Whatsapp Link

    // Begin: footer time
    setInterval(showTime, 1000);
    function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";

        if (hour > 12) {
            hour -= 12;
            am_pm = "PM";
        }
        if (hour == 0) {
            hr = 12;
            am_pm = "AM";
        }

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;

        document.getElementById("clock")
            .innerHTML = currentTime;
    }

showTime();
//End: footer time

const btnScrollToTop = document.querySelector('.btnScrollToTop');

btnScrollToTop.addEventListener("click", function() {
 
    $("html, body").animate({ scrollTop: 0 }, "slow");
 
})
