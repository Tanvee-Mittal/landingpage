/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
/*navigator global variable*/
const navigator = document.getElementById('navbar__list');
//sections global variable//
const sections = document.querySelectorAll('section');




// build the nav
const navBuilding = () => {

    let navUserInterface = '';
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUserInterface += `<li><a class= "menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    //appending elements to the navigation//
    navigator.innerHTML = navUserInterface;
    
};
navBuilding();

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

//removing the active class//
const removeActive =(section) => {

    section.classList.remove('your-active-class');
    section.style.cssText = "background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";  
    
};

// Add class 'active' to section when near top of viewport
const addActive = (condition,section) => {
   
    if(condition){
        section.classList.add('your-active-class');
        section.style.cssText= "background-color: #5e6472; cursor: pointer";
    };
};

const activeSection =()=>{
    
    sections.forEach(section => {
        const elementOffsett = offset(section);

        inviewport = () => elementOffsett< 150 && elementOffsett >= -150;
       
        removeActive(section);
        addActive(inviewport(),section);
        
    });
  
};

function myFunction(e){
    const elems = document.querySelectorAll('.active');
    [].forEach.call(elems,function(el){
        el.classList.remove('active');
    });
    e.target.className = 'active';
}


document.addEventListener('scroll',activeSection);

// Scroll to anchor ID using scrollTO event
const scroll_to = () =>{
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link =>{
        link.addEventListener('click',() =>{
            for(let i=0;i<sections;i++){
                sections[i].addEventListener('click',sectionScroll(link));
            }
        });
    });
};
scroll_to();

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  };
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
};

let all_menu_links = document.querySelectorAll('.menu__link');
window.addEventListener('scroll', event => {
  let fromTop = window.scrollY - 0;

  all_menu_links.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop + 55 && section.offsetTop + section.offsetHeight > fromTop + 55) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});