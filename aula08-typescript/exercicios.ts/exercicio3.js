//Utilizando a interface Livro fica assim 
function exibirLivro(livro) {
    console.log("T\u00EDtulo - ".concat(livro.titulo));
    console.log("Autor - ".concat(livro.autor));
    console.log("Ano de Publica\u00E7\u00E3o - ".concat(livro.anoPublicacao));
}
exibirLivro({ titulo: 'Trono de Vidro', autor: 'Sarah J. Maas', anoPublicacao: 2013 });
