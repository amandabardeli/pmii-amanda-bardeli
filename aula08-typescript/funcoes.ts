//Função que retorna tipos 
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao('Leandro'));

//Interface para objeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opcional
}

//Utilizando a interface usuário fica assim 
function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);

}

exibirUsuario({ nome: 'Luigi', idade: 17});

//Exenplo de uma função que retorna arrays e tem parametros opcionais
 function listarNomes(nomes: string[]): void {
    nomes.forEach(nome => console.log(nome));
 }

 listarNomes(['Maria', 'Marcos', 'Leonardo']);