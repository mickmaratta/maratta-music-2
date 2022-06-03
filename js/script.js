//NAVBAR

//MOBILE 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');
  
      //Animate Links
      navLinks.forEach((link, index) => {
        
        if(link.style.animation) {
          link.style.animation = ''
          
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
          
        }
    });
      //Burger Animation
      burger.classList.toggle('toggle');
    });

    //Toggle Nav on Link click
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach((linkAni) => {
          linkAni.style.animation = '';
        })
      })
    })
    
  }

  navSlide();

//DESKTOP
  //Toggle Active Class
  const activeClass = () => {
  const navLinks = document.querySelectorAll('.nav-links li');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach(link => {
        link.classList.remove('nav-link-active')
      })
      link.classList.toggle("nav-link-active")
    })
  })
};

activeClass();


