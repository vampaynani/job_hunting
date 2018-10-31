window.onload=(function(){
    initializate();
})();

function initializate(){
    var bloque1 = document.querySelector("form");
    var bloque2 = document.querySelector("#end");
    var send = document.querySelector("#send");

    send.addEventListener('click',function(e){
        e.preventDefault(e);
        console.log('it works >:v');
    });

    send.addEventListener('click', function(e){
        e.preventDefault(e);


    })
}