function getFetchV() {
    return fetch('https://www.amiiboapi.com/api/amiibo/')
        .then(res => res.json())
}


export function getFetchV2() {
    return fetch(path, {
        headers: {
            Authorization:
                "Bearer JIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}


console.log(getFetchV())
export const valida = (user, pass) => {
    const arrayusuarios = getFetchV();
    console.log(arrayusuarios)
    const objEncontrado = arrayusuarios.find(
        (elemento) => elemento.username == user && elemento.password == pass,
        console.log(elemento))
}



