burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.nav-right')



burger.addEventListener  ('click' , ()=>{
    rightNav.classList.toggle('v');
    navList.classList.toggle('v');
    navbar.classList.toggle('h-nav');


})