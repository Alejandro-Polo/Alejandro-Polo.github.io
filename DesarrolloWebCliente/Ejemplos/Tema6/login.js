function getFetchV(){
    fetch('http://localhost:3000/user')
        .then(res=>res.json())  
        .then(json=>{console.log(json)
            return json
        }
    )
}

export const valida = (user,pass) =>{
    const arrayusuarios = getFetchV();
    console.log(arrayusuarios)
    const objEncontrado = arrayusuarios.find(
        (elemento)=>elemento.username == user && elemento.password == pass,
        console.log(elemento))
}



