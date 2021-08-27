const menu = document.querySelector('.men');

window.addEventListener('scroll' , () =>{
  if(window.scrollY > 120){
      menu.style.height = '10%';
      menu.style.transition = '2s';
      menu.style.boxShadow = '5px 0px 10px rgb(0,0,0,0.5)';
      // menu.style.zIndex = '2';
  }
  else{
    menu.style.height = '18%';  
  }
});

const mybutton = document.getElementById('myBtn');
window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop > 200){
      mybutton.style.bottom = "30px";
    }
    else{
      mybutton.style.bottom = "-100px";
    }
});
function topFunction(){
  $("html").animate({scrollTop:"0"}, "600");
}