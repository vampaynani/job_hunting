window.onload=(function(){
    initializate();
})();

function initializate(){
    var bloque1 = document.querySelector("form");
    var bloque2 = document.querySelector("#end");
    var boton = document.querySelector("#boton");
    var texto = document.querySelectorAll(".txt");
    var gracias = document.querySelector(".txtend");

    boton.addEventListener('click',function(e){
        console.log('it works >:v');

        TweenLite.set(texto, {opacity: 1});
        TweenLite.to(texto, 1,{opacity: 0,});
        TweenLite.set(bloque1,{height: "2200px", width: "50%", delay: 1});
        TweenLite.to(bloque1,1,{height: "0px", width: "50%", delay: 2});
        TweenLite.to(bloque1,1,{height: "0px", width: "0%",display: "none", delay: 3});
        TweenLite.set(bloque2,{display: "none",height: "0px", width: "0%", delay: 4});
        TweenLite.to(bloque2,1,{display:"block", height: "0px", width: "50%", delay: 6});
        TweenLite.to(bloque2,1,{height: "50px", width: "50%", delay: 7});
        TweenLite.set(gracias,{opacity: 0, delay: 8});
        TweenLite.to(gracias,1,{opacity: 1, delay: 9});
    });
}