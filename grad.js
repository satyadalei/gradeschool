window.alert("please kindly see this page in deesktop mode")
function showLinks(){
    var burgers = document.querySelector(".burger");
    var navs = document.querySelector("nav");

    burgers.addEventListener("click",crossBurger);
    burgers.addEventListener("click",showNav);
    

    function crossBurger(){
        burgers.classList.toggle("change");
    };

    

    function showNav(){
       navs.classList.toggle("nav_toggle");
    }
    // showNav();

}
showLinks();

$(document).ready(function(){

$(".aim").hover(
                function(){
                    $(this).animate({   
                         //animate height -- increase height
                        height: "+=250" 
                    }, "slow"
                    );
                },
                function(){
                    $(this).animate({
                        // animate height -- decrease height
                        height: "-=250"
                    },"slow"
                    );
                }

            )

});

  var botn = document.querySelector(".feature1");
    botn.addEventListener("click", makeBig);
    function makeBig(){
          document.querySelector(".button_in1").classList.toggle("new_div_btn");
    }
    makeBig();
    document.querySelector(".button_in1").style.cursor ="pointer";