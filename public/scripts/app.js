window.onload=(function(){
    initializate();
})();

function initializate(){
    var bloque1 = document.querySelector("form");
    var bloque2 = document.querySelector("#end");
    var send = document.querySelector("#send");

    send.addEventListener('click',function(e){
        e.preventDefault(e);
        console.log('it works');

        TweenLite.set(bloque1,{top: "0%"});
        TweenLite.to(bloque1,.5,{top: "-100%", display: "none"});
        TweenLite.set(bloque2,{top: "-100%", display: "none", delay: .5});
        TweenLite.to(bloque2,.5,{top:"0%", display: "block", delay: 1.5});
    });

    send.addEventListener('click', function(e){
        e.preventDefault(e);
        console.log('enviando')


        var inputnombre = document.getElementsByName('nombre')[0].value;
        var inputpaterno = document.getElementsByName('paterno')[0].value;
        var inputmaterno = document.getElementsByName('materno')[0].value;
        
        var inputcalle = document.getElementsByName('calle')[0].value;
        var inputcolonia = document.getElementsByName('colonia')[0].value;
        var inputdelegacion = document.getElementsByName('delegacion')[0].value;
        var inputcp = document.getElementsByName('cp')[0].value;
        
        var inputedad = document.getElementsByName('edad')[0].value;
        
        var inputestado = document.getElementsByName('estado')[0].value;
        
        var inputhijos = document.getElementsByName('hijos')[0].value;
        
        var inputestudio = document.getElementsByName('estudio')[0].value;

        var inputtatuaje = document.getElementsByName('tatuaje')[0].value;

        var inputempresa = document.getElementsByName('empresa')[0].value;
        var inputseparacion = document.getElementsByName('separacion')[0].value;
        var inputpuesto = document.getElementsByName('puesto')[0].value;
        var inputtiempo = document.getElementsByName('tiempo')[0].value;

        var inputnombre1 = document.getElementsByName('nombre1')[0].value;
        var inputnombre2 = document.getElementsByName('nombre2')[0].value;
        var inputnombre3 = document.getElementsByName('nombre3')[0].value;

        var inputtel1 = document.getElementsByName('tel1')[0].value;
        var inputtel2 = document.getElementsByName('tel2')[0].value;
        var inputtel3 = document.getElementsByName('tel3')[0].value;

        var inputocupacion1 = document.getElementsByName('ocupacion1')[0].value;
        var inputocupacion2 = document.getElementsByName('ocupacion1')[0].value;
        var inputocupacion3 = document.getElementsByName('ocupacion1')[0].value;

        var inputexpv = document.getElementsByName('expv')[0].value;
        var inputexpatc = document.getElementsByName('expatc')[0].value;

        var inputlunesm = document.getElementsByName('lunesm')[0].value;
        var inputlunesv = document.getElementsByName('lunesv')[0].value;

        var inputmartesm = document.getElementsByName('martesm')[0].value;
        var inputmartesv = document.getElementsByName('martesv')[0].value;

        var inputmiercolesm = document.getElementsByName('miercolesm')[0].value;
        var inputmiercolesv = document.getElementsByName('miercolesv')[0].value;

        var inputjuevesm = document.getElementsByName('juevesm')[0].value;
        var inputjuevesv = document.getElementsByName('juevesv')[0].value;

        var inputviernesm = document.getElementsByName('viernesm')[0].value;
        var inputviernesv = document.getElementsByName('viernesv')[0].value;

        var inputsabadom = document.getElementsByName('sabadom')[0].value;
        var inputsabadov = document.getElementsByName('sabadov')[0].value;

        var inputdomingom = document.getElementsByName('domingom')[0].value;
        var inputdomingov = document.getElementsByName('domingov')[0].value;

        var inputcv = document.getElementsByName('cv')[0].value;
        var inputine = document.getElementsByName('ine')[0].value;

        const Data = {
            inputnombre,
            inputpaterno,
            inputmaterno,
            inputcalle,
            inputcolonia,
            inputdelegacion,
            inputcp,
            inputedad,
            inputestado,
            inputhijos,
            inputestudio,
            inputtatuaje,
            inputempresa,
            inputseparacion,
            inputpuesto,
            inputtiempo,
            inputnombre1,
            inputnombre2,
            inputnombre3,
            inputtel1,
            inputtel2,
            inputtel3,
            inputocupacion1,
            inputocupacion2,
            inputocupacion3,
            inputexpv,
            inputexpatc,
            inputlunesm,
            inputlunesv,
            inputmartesm,
            inputmartesv,
            inputmiercolesm,
            inputmiercolesv,
            inputjuevesm,
            inputjuevesv,
            inputviernesm,
            inputviernesv,
            inputsabadom,
            inputsabadov,
            inputdomingom,
            inputdomingov,
            inputcv,
            inputine,
        }

        api.submitForm(Data);
        
    })
}