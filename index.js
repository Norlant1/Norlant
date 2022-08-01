const hamburger = document.querySelector(".hamburger");
const menubox = document.querySelector(".menubox");
const menutext1 = document.querySelector(".menu-text1");
const menutext2 = document.querySelector(".menu-text2");
const menutext3 = document.querySelector(".menu-text3");
const menuanimation = [menutext1, menutext2, menutext3];
const line1 = document.querySelector(".hamburger-line1");
const line2 = document.querySelector(".hamburger-line2");
const line3 = document.querySelector(".hamburger-line3");
const hamanimation = [line1,line2,line3];

const sectionone = document.querySelector(".content-second");
const bodysections = document.querySelectorAll("#body-content");
const bodysections2 = document.querySelectorAll("#body-content2"); 

const options = {
  
  threshold: 1, 
  rootMargin: "0px 100% 0px 100%"
};
const observer = new IntersectionObserver(callback,options);

function callback(entries,observer){
 

  entries.forEach(entry => {

    console.log(entry.target);


     if(entry.isIntersecting){
      entry.target.classList.toggle("show");
      observer.unobserve(entry.target);
     }
      
    
  });
 

}


bodysections.forEach(each => {
  observer.observe(each);
});
bodysections2.forEach(each => {
  observer.observe(each);
});











hamburger.addEventListener("click",showmenu);

function showmenu(){
  
 hamanimation.forEach(line => {
  line.classList.toggle("animate");
 })
menuanimation.forEach(menu => {
  menu.classList.toggle("menu-center");
})

  menubox.classList.toggle("showbar");
 
}
