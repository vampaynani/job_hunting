var create = document.querySelector('form');

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

        pack();
    });
}


function pack(){
    
    var nombre = create.nombre.value;
    var paterno = create.paterno.value;
    var materno = create.materno.value;

    var calle = create.calle.value;
    var colonia = create.colonia.value;
    var delegacion = create.delegacion.value;
    var cp = create.cp.value;
    
    var edad = create.edad.value;
    
    var civil = create.estado.value;
    
    var hijos = create.hijos.value;
    
    var estudios = create.estudio.value;

    var tatuajes = create.tatuaje.value;

    var empresa = create.empresa.value;
    var separacion = create.separacion.value;
    var puesto = create.puesto.value;
    var tiempo = create.tiempo.value;

    var referencias = [{
        nombre: create.nombre1.value,
        numero: create.tel1.value,
        ocupacion: create.ocupacion1.value,
    },{
        nombre: create.nombre2.value,
        numero: create.tel2.value,
        ocupacion: create.ocupacion3.value,
    },{
        nombre: create.nombre3.value,
        numero: create.tel3.value,
        ocupacion: create.ocupacion3.value,
    }]

    var exp_mostrador = create.ventas.value;
    var exp_atc = create.atc.value;

    var disponibilidad = {
        Lunes: {
            matutino: document.getElementsByName('lunesm')[0].value,
            vespertino: document.getElementsByName('lunesv')[0].value
        },
        Martes: {
            matutino: document.getElementsByName('martesm')[0].value,
            vespertino: document.getElementsByName('martesm')[0].value
        },
        Miercoles:{
            matutino: document.getElementsByName('miercolesm')[0].value,
            vespertino: document.getElementsByName('miercolesv')[0].value
        },
        Jueves:{
            matutino: document.getElementsByName('juevesm')[0].value,
            vespertino: document.getElementsByName('juevesv')[0].value
        },
        Viernes:{
            matutino: document.getElementsByName('viernesm')[0].value,
            vespertino: document.getElementsByName('viernesv')[0].value
        },
        Sabado:{
            matutino: document.getElementsByName('sabadom')[0].value,
            vespertino: document.getElementsByName('sabadov')[0].value
        },
        Domingo:{
            matutino: document.getElementsByName('domingom')[0].value,
            vespertino: document.getElementsByName('domingov')[0].value
        }
    }

    fetch('http://localhost:3000/postulantes/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            paterno,
            materno,
            calle,
            colonia,
            delegacion,
            cp,
            edad,
            civil,
            hijos,
            estudios,
            tatuajes,
            empresa,
            separacion,
            puesto,
            tiempo,
            referencias,
            exp_mostrador,
            exp_atc,
            disponibilidad,
        })
    })
    .then(response =>{
        if(!response.ok){
            return Promise.reject(response.json());
            console.log('fuck!')
        }
        return response.json();
        console.log('hurray!')
    })
    .then(user =>{
        create.reset();
    })
    .catch(error=> console.log(error));    
}