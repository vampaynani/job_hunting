window.onload=(function(){
    initializate();
})();

function initializate(){
    var bloque1 = document.querySelector("form");
    var bloque2 = document.querySelector("#end");
    var boton = document.querySelector("#boton");

    boton.addEventListener('click',function(e){
        console.log('it works >:v');

        TweenLite.set(bloque1, { height: '2200px', width: '50%', display: 'block'});
        TweenLite.to(bloque1, 1,{height: '0%', width: '50%', display: 'block'});
        TweenLite.to(bloque1, 1,{height: '0%', width: '0%', display: 'block', delay: 1});
        TweenLite.to(bloque1, 1,{display: 'none', delay: 2});
        TweenLite.set(bloque2,{height: '0%', width: '0%'});
        TweenLite.to(bloque2,1,{height: '0%', width: '50%', display: 'block',delay: 3});
        TweenLite.to(bloque2,1,{height: '50%', width: '50%', display: 'block', delay: 4});

    });
}