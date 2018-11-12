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
        <td>${user.nombre+', '+user.paterno+', '+user.materno}</td>
        <td>${user.edad}</td>
        <td>${user.calle+', '+user.colonia+', '+user.delegacion+', '+user.cp}</td>
        <td>${user.civil}</td>
        <td>${user.hijos}</td>
        <td>${user.estudios}</td>
        <td>${user.tatuajes}</td>
        <td>${user.exp_ventas}</td>
        <td>${user.exp_atc}</td>
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
    </tr>
    </thead>`);

    var tabla = document.querySelector('#tabla');
    tabla.innerHTML = userTable.join('');
}

/*
const tabla = document.querySelector('#tabla');
tabla.addEventListener('click', function(e){
    e.preventDefault();
    //console.log('Click', e.currentTarget, e.target, e.target.innerHTML);
    if(e.target.innerHTML.trim() === "Borrar"){
        //console.log('Este es el bueno');
        //console.log(e.target.dataset.userid);

        var uid = e.target.dataset.userid;
        
        fetch(`http://localhost:8080/api/users/${uid}`,{
            method: 'DELETE',
            headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    }).then(response =>{
        if(!response.ok){
            return Promise.reject(response.json());
        }
       _users = _users.filter(user => user._id !== uid);
        render();
    }).catch(error => console.log(error));
}
});
*/