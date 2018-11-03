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

        var inputnombre = this.nombre.value;
        var inputpaterno = this.paterno.value;
        var inputmaterno = this.materno.value;
        
        var inputcalle = this.calle.value;
        var inputcolonia = this.colonia.value;
        var inputdelegacion = this.delegacion.value;
        var inputcp = this.cp.value;
        
        var inputedad = this.edad.value;
        
        var inputestado = this.estado.value;
        
        var inputhijos = this.hijos.value;
        
        var inputestudio = this.estudio.value;

        var inputtatuaje = this.tatuaje.value;

        var inputempresa = this.empresa.value;
        var inputseparacion = this.separacion.value;
        var inputpuesto = this.puesto.value;
        var inputtiempo = this.tiempo.value;

        var inputnombre1 = this.nombre1.value;
        var inputnombre2 = this.nombre2.value;
        var inputnombre3 = this.nombre3.value;

        var inputtel1 = this.tel1.value;
        var inputtel2 = this.tel2.value;
        var inputtel3 = this.tel3.value;

        var inputocupacion1 = this.ocupacion1.value;
        var inputocupacion2 = this.ocupacion2.value;
        var inputocupacion3 = this.ocupacion3.value;

        var inputexpv = this.ventas.value;
        var inputexpatc = this.atc.value;

        var inputlunesm = this.lunesm.value;
        var inputlunesv = this.lunesv.value;

        var inputmartessm = this.martesm.value;
        var inputmartesv = this.martesv.value;

        var inputmiercolesm = this.miercolesm.value;
        var inputmiercolesv = this.miercolesv.value;

        var inputjuevesm = this.juevesm.value;
        var inputjuevesv = this.juevesv.value;

        var inputviernesm = this.viernesm.value;
        var inputviernesv = this.viernesv.value;

        var inputsabadom = this.sabadom.value;
        var inputlsabadov = this.sabadov.value;

        var inputdomingom = this.domingom.value;
        var inputdomingov = this.domingov.value;

        var inputcv = this.cv.value;
        var inputine = this.ine.value;

        api.submitForm(Data);
        
    })
}