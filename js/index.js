let topbtn = document.getElementById("back-to-top")


//function to scroll to top
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20 ){
        topbtn.style.display ="block";
    }
}

function scrollToTop(){
    document.documentElement.scrollTop = 0;
}