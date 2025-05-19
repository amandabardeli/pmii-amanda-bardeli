//Interface para objeto Livro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number; 
}

//Utilizando a interface Livro fica assim 
function exibirLivro(livro: Livro): void {
    console.log(`Título - ${livro.titulo}`)
    console.log(`Autor - ${livro.autor}`)
    console.log(`Ano de Publicação - ${livro.anoPublicacao}`)
}

exibirLivro({ titulo: 'Trono de Vidro', autor: 'Sarah J. Maas', anoPublicacao: 2013});