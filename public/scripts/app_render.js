var _users;

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
        <!--<td><label for="borrar"><ion-icon id="bote" name="trash"></ion-icon></label></td>
        <td id="borrar" class="del"><input type="button" placeholder="Delete" value="delete"></td>-->
        <td><button data-userid=${user._id}>Borrar</button></td>
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
    <th>CV</th>
    <th>INE</th>
    <th> </th>
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