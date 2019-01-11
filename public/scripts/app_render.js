var _users;
var _user;
const tabla = document.querySelector('#tabla');
const mySection = document.querySelector('#hide');

window.onload=(function(){
    initializer();
});

//to get all clients
fetch('http://localhost:3000/postulantes/users', {
    method: 'GET',
    headers:{
        'Accept': 'application/json',
        'Content-type':'application/json'
    }
})
.then(response=>{
    if(!response.ok){
        return Promise.reject(response.json());
    }
    return response.json();
})
.then(users=>{
    _users = users;
    render();
}).catch(error=> console.log(error));

function render(){
    var userTable = _users.map(user =>{
        return `<tr>
        <td>${user.nombre+' '+user.paterno+' '+user.materno}</td>
        <td>${user.edad}</td>
        <td>${user.calle+', '+user.colonia+', '+user.delegacion+', '+user.cp}</td>
        <td>${user.civil}</td>
        <td>${user.hijos}</td>
        <td>${user.estudios}</td>
        <td>${user.tatuaje}</td>
        <td>${user.exp_mostrador}</td>
        <td>${user.exp_atc}</td>
        <td><ion-icon data-userid2=${user._id} class="lupa" name="search">Más</ion-icon></td>
        <td><ion-icon data-userid=${user._id} id="bote" name="trash">Borrar</ion-icon></td>
        </tr>`
    })
    userTable.unshift(`
    <thead>
    <tr>
    <th>Nombre</th>
    <th>Edad</th>
    <th>Dirección Completa</th>
    <th>Estado Civil</th>
    <th>Hijos</th>
    <th>Estudios</th>
    <th>Tatuajes</th>
    <th>Exp. Ventas</th>
    <th>Exp. ATC</th>
    <th>Mas Info</th>
    <th>Eliminar</th>
    </tr>
    </thead>`);

    var tabla = document.querySelector('#tabla');
    tabla.innerHTML = userTable.join('');
}

//addEventListener para icono de borrar

tabla.addEventListener('click', function(e){
    e.preventDefault();

    if(e.target.innerHTML.trim() === "Borrar"){
        var id2 = e.target.dataset.userid;
        fetch(`http://localhost:3000/postulantes/user/${id2}`,{
            method: 'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response=>{
            if(!response.ok){
                return Promise.reject(response.json());
            }
            _users = _users.filter(user=> user._id !== id2);
            render();
        }).catch(error=>console.log(error));
    }
});

//addEventListener para icono de buscar
function initializer(){
const opnr = document.querySelectorAll('.lupa');
opnr.forEach(search=> search.addEventListener('click', function(e){
    e.preventDefault();

    mySection.style.display="flex";

    if(e.target.innerHTML.trim() === "Más"){
        var id1 = e.target.dataset.userid2;
        fetch(`http://localhost:3000/postulantes/user/${id1}`,{
            method: 'GET',
            headers:{
                'Accept':'application/json',
                'Content-type': 'application/json'
            }
        }).then(response=>{
            if(!response.ok){
                return Promise.reject(response.json());
            }
            return response.json();            
        }).then(user =>{
            _user = user;
            var lol = `
            <section id="fst_cont">
            <div class="cerrar">
            <ion-icon id="cerrar" name="close-circle-outline"></ion-icon>
            </div>
            <div id=con_tenedor>
                <table id="tabla2">
                <thead>
                <tr>
                <th>Ultima Empresa</th>
                <th>Puesto</th>
                <th>Tiempo Laborado</th>
                <th>Motivo de Separación</th>
                <th>Nombre Referencia</th>
                </tr>
                </thead>
                <tr>
                <td>${user.empresa}</td>
                <td>${user.separacion}</td>
                <td>${user.puesto}</td>
                <td>${user.tiempo}</td>
                <td>
                
                <ul>
                <h3>${user.referencias[0].nombre}</h3>
                <li>${user.referencias[0].numero}</li>
                <li>${user.referencias[0].ocupacion}</li>
                </ul>
                <br>
                <ul>
                <h3>${user.referencias[1].nombre}</h3>
                <li>${user.referencias[1].numero}</li>
                <li>${user.referencias[1].ocupacion}</li>
                </ul>
                <br>
                <ul>
                <h3>${user.referencias[2].nombre}</h3>
                <li>${user.referencias[2].numero}</li>
                <li>${user.referencias[2].ocupacion}</li>
                </ul>
                </td>
            </table>

            <h1 class="disp">Disponibilidad de horario</h1>


            <table id="tabla3">

                <td .dia>
                    <h2>Lunes</h2>
                    <ul>
                        <li>Matutino: ${user.disponibilidad.Lunes.matutino}</li>
                        <li>Vespertino: ${user.disponibilidad.Lunes.vespertino}</li>
                    </ul>
                </td>

                <td .dia>
                    <h2>Martes</h2>
                    <ul>
                        <li>Matutino: ${user.disponibilidad.Martes.matutino}</li>
                        <li>Vespertino: ${user.disponibilidad.Martes.vespertino}</li>    
                    </ul>
                </td>
        
                <td .dia>
                    <h2>Miércoles</h2>
                    <ul>
                        <li>Matutino: ${user.disponibilidad.Miercoles.matutino}</li>
                        <li>Vespertino: ${user.disponibilidad.Miercoles.vespertino}</li>
                    </ul>
                </td>

                <td .dia>
                    <h2>Jueves</h2>
                    <ul>
                        <li>Matutino: ${user.disponibilidad.Jueves.matutino}</li>
                        <li>Vespertino: ${user.disponibilidad.Jueves.vespertino}</li>
                    </ul>
                </td>

                <td .dia>
                    <h2>Viernes</h2>
                    <ul>
                        <li>Matutino: ${user.disponibilidad.Viernes.matutino}</li>
                        <li>Vespertino: ${user.disponibilidad.Viernes.vespertino}</li>
                    </ul>
                </td>

                <td .dia>
                    <h2>Sábado</h2>
                    <ul>
                        <li>Matutino: ${user.disponibilidad.Sabado.matutino}</li>
                        <li>Vespertino: ${user.disponibilidad.Sabado.vespertino}</li>
                    </ul>
                </td>

                <td .dia>
                    <h2>Domingo</h2>
                    <ul>
                        <li>Matutino: ${user.disponibilidad.Domingo.matutino}</li>
                        <li>Vespertino: ${user.disponibilidad.Domingo.vespertino}</li>
                    </ul>
                </td>
            
            </table>
        </div>

            <div id="cv">
            <script src="./scripts/pdfobject.js"></script>
            <script>PDFObject.embed("./uploads/${user.cv}", "#cv");</script>
            </div>
        
            <div id="ine">
            <script src="./scripts/pdfobject.js"></script>
            <script>PDFObject.embed("./uploads/${user.ine}", "#ine");</script>
            </div>
            </section>
            `
            mySection.innerHTML=lol;

        const closer = document.querySelector('#cerrar');
        closer.addEventListener('click',function(e){
        e.preventDefault();
        console.log(':D')
        mySection.style.display="none";
        });

        }).catch(error=> console.log(error));      
    }
}))
};

const route = require('../uploads/')