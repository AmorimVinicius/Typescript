interface Usuario{
    nome: string;
    email: string;
    endereco?: string; // opcional
}

function getUser(): Usuario{
    return {
        nome: 'Vinicius',
        email: 'email@email.com'
    }
}

function setUser(usuario: Usuario){
    // ..........
}