let  subscribe_js=document.getElementById("subscribe"), close_subs_js=document.getElementById("close_subs"), 
more_js=document.getElementById("more"), close_bar_js=document.getElementById("close_bar"), 
menu_bar_js=document.getElementById("menu_bar"), ul1_js=document.getElementById("ul1"), 
ul2_js=document.getElementById("ul2");

more_js.onclick=function(){
    subscribe_js.style.display="flex";
}
close_subs_js.onclick=function(){
    subscribe_js.style.display="none";
}
menu_bar_js.onclick=function(){
    ul1_js.style.display="flex";
    ul2_js.style.display="flex";
    close_bar_js.style.display="block";
    menu_bar_js.style.display="none";
}
close_bar_js.onclick=function(){
    ul1_js.style.display="none";
    ul2_js.style.display="none";
    close_bar_js.style.display="none";
    menu_bar_js.style.display="block";
}


$(document).ready(function() {


    $(window).on('scroll load', function(){
  
          if($(window).scrollTop() > 0){
             $('.fix').show();
          }else{
             $('.fix').hide();
          }
     });
    
 });