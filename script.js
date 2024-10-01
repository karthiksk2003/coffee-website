// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Nav open close
const body=document.querySelector('body'),
      navMenu=body.querySelector('.menu-content'),
      navOpenBtn=body.querySelector('.navOpen-btn'),
      navCloseBtn=navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click",() =>{
        navMenu.classList.add("open");
        body.style.overflowY="hidden";
    })
}

if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click",() =>{
        navMenu.classList.remove("open");
        body.style.overflowY="scroll";
    })
}
// Change header bg color
window.addEventListener("scroll",()=>{
  const scrollY=window.pageYOffset;

  if(scrollY>5){
    document.querySelector("header").classList.add("header-active");
  }else{
    document.querySelector("header").classList.remove("header-active");
  }



 // Scroll up button
  const scrollUpBtn=document.querySelector('.scrollUp-btn');
  if(scrollY>250){
    scrollUpBtn.classList.add("scrollUpBtn-active");
  }
  else{
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }
}); 
// Nav link indicator
// Nav link indicator
const sections = document.querySelectorAll('section[id]');

const updateNavLinks = () => {
  const scrollY = window.scrollY; // Get the current scroll position

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60; // Adjust for any fixed headers

    const navId = document.querySelector(`.menu-content a[href*="${section.id}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navId) {
        navId.classList.add("active-navlink");
      }
    } else {
      if (navId) {
        navId.classList.remove("active-navlink");
      }

      navId.addEventListener("click",()=>{
        navMenu.classList.remove("open");
        body.style.overflowY="scroll";
      })
    }
  });
};

// Add event listener to update navigation on scroll
window.addEventListener('scroll', updateNavLinks);

// Initial call to highlight the correct link on page load
updateNavLinks();

console.log(sections);

  
// Scroll Reveal Animation
const sr=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,

})

sr.reveal(`.section-subtitle , .section-title,.section-description,.brand-image,.testimonal,.newsletter,.logo-content,.newsletter-inputBox,.newsletter-mediaIcon,.footer-content,.footer-links`,{interval:100,})

sr.reveal(`.about-imageContent,.menu-items`,{origin:'left'})
sr.reveal(`.about-details,.time-table`,{origin:'right'})


  