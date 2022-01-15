
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
sr.reveal('.button',{delay: 100}); 
sr.reveal('.home__img',{delay: 100});
sr.reveal('.home__data p',{delay: 100});
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 100}); 
sr.reveal('.first__text',{ delay: 100 }); 
sr.reveal('.second__text',{ delay: 100 });

/*SCROLL SKILLS*/
sr.reveal('.skills__title',{}); 
sr.reveal('.stack',{delay: 100}); 
sr.reveal('.skills__data',{interval: 100}); 
sr.reveal('.skills__img',{delay: 100});

/*SCROLL PROJECTS*/
sr.reveal('.projects',{});
sr.reveal('.projects__image', { interval: 200 }); 

/*SCROLL CONTACT*/
sr.reveal('.contact-content', { interval: 200 }); 
sr.reveal('.left', { interval: 200 });
sr.reveal('.right', { interval: 300 });

sr.reveal('.contact-content', { interval: 200 });

ScrollReveal().reveal('#contact .left', {
    origin: 'left',
    delay: 100,
    duration: 300,
    reset: true,
    distance: '150px',
});

ScrollReveal().reveal('#contact .right', {
    origin: 'right',
    delay: 100,
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
            call_to_action: "Send me a Private message", // Call to action
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
