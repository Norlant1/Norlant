const hamburger = document.querySelector(".hamburger");
const menubox = document.querySelector(".menubox");
const menutext1 = document.querySelector(".menu-text1");
const menutext2 = document.querySelector(".menu-text2");
const menutext3 = document.querySelector(".menu-text3");

const sectionone = document.querySelector(".content-second");
const allsection = document.querySelectorAll("#body-content");


const options = {
  root: null,  
  threshold: 1, 
  rootMargin: "0px"
};
const observer = new IntersectionObserver(callback,options);

function callback(entries,observer){
 

  entries.forEach(entry => {

    console.log(entry.target);


    if(entry.isIntersecting){
      entry.target.classList.toggle("test");
      observer.unobserve(entry.target);
    }
  });
 

}

allsection.forEach(item => {

  observer.observe(item);
});






hamburger.addEventListener("click",showmenu);

function showmenu(){
 
  menubox.classList.toggle("showbar");
  menutext1.classList.toggle("menu-center");
  menutext2.classList.toggle("menu-center");
  menutext3.classList.toggle("menu-center");
}
