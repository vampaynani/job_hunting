var _users;

window.onload=(function(){
    initial();
});

fetch('http://localhost:3000/postulantes/users')
.then(response =>{
    if(!response.ok){
        return Promise.reject(response.json());
    }
    return response.json();
})
.then(users =>{
    console.log(users);
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
        <td>${user.tatuajes}</td>
        <td>${user.exp_ventas}</td>
        <td>${user.exp_atc}</td>
        <td><ion-icon data-userid=${user._id} id="lupa" name="search">Más</ion-icon></td>
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

const tabla = document.querySelector('#tabla');//selecciona de html el elemento con id="tabla"
tabla.addEventListener('click', function(e){
    e.preventDefault();

    if(e.target.innerHTML.trim() === "Borrar"){
        var uid = e.target.dataset.userid;

        fetch(`http://localhost:3000/postulantes/user/${uid}`,{
            method: 'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).then(response=>{
            if(!response.ok){
                return Promise.reject(response.json());
            }
            _users = _users.filter(user=> user._id !== uid);
            render();
        }).catch(error=>console.log(error));
    }
});

function initial(){
const mySection = document.querySelector('#hide');
const opener = document.querySelector('#lupa');
opener.addEventListener('click', function(e){
    e.preventDefault();

    mySection.style.display="flex";

    if(e.target.innerHTML.trim() === "Más"){
        var uid2 = e.target.dataset.userid;
        console.log(uid2);
        fetch(`http://localhost:3000/postulantes/user/${uid2}`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-type':'application/json'
            }
        }).then(response=>{
            if(!response.ok){
                return Promise.reject(response.json());
            }
        })
        .then(users =>{
            _users = users;
            mySectionRender();
        }).catch(error=> console.log(error));
    }
});

const hideIt = document.querySelector('.cerrar');
hideIt.addEventListener('click', function(e){
    e.preventDefault();
    mySection.style.display="none";
});

} //finaliza initial();

function mySectionRender(){
    console.log('Works');
    var userDiv = _users.map(user=>{ //Problema aquí, no sé que sea.
        return `
        <div class="cerrar">
        <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <table id="tabla2">
        <thead>
        <tr>
        <th>Ultima Empresa</th>
        <th>Puesto</th>
        <th>Tiempo Laborado</th>
        <th>Motivo de Separación</th>
        <th>Nombre Referencia</th>
        <th>Horario Disponible</th>
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
    
        <td>
        <tr>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sábado</th>
        <th>Domingo</th>
        </tr>

        <tr>
        <td>
        <ul>
        <li>Matutino: ${user.disponibilidad.Lunes[0]}</li>
        <li>Vespertino: ${user.disponibilidad.Lunes[1]}</li>
        </ul>
        </td>
        <td>
        <ul>
        <li>Matutino: ${user.disponibilidad.Martes[0]}</li>
        <li>Vespertino: ${user.disponibilidad.Martes[1]}</li>
        </ul>
        </td>
        <td>
        <ul>
        <li>Matutino: ${user.disponibilidad.Miercoles[0]}</li>
        <li>Vespertino: ${user.disponibilidad.Miercoles[1]}</li>
        </ul>
        </td>
        <td>
        <ul>
        <li>Matutino: ${user.disponibilidad.Jueves[0]}</li>
        <li>Vespertino: ${user.disponibilidad.Jueves[1]}</li>
        </ul>
        </td>
        <td>
        <ul>
        <li>Matutino: ${user.disponibilidad.Viernes[0]}</li>
        <li>Vespertino: ${user.disponibilidad.Viernes[1]}</li>
        </ul>
        </td>
        <td>
        <ul>
        <li>Matutino: ${user.disponibilidad.Sabado[0]}</li>
        <li>Vespertino: ${user.disponibilidad.Sabado[1]}</li>
        </ul>
        </td>
        <td>
        <ul>
        <li>Matutino: ${user.disponibilidad.Domingo[0]}</li>
        <li>Vespertino: ${user.disponibilidad.Domingo[1]}</li>
        </ul>
        </td>
        </tr>
        </td>
        </tr>
    </table>
    
        <div id="cv">
        <script src="/js/pdfobject.js"></script>
        <script>PDFObject.embed("/folder_name/${user.cv}", "#cv");</script>
        </div>
    
        <div id="ine">
        <script src="/js/pdfobject.js"></script>
        <script>PDFObject.embed("/folder_name/${user.ine}", "#ine");</script>
        </div>
        `   
        });
        var container = document.querySelector('#container');
        container.innerHTML = userDiv.join('');
}