//Utilizando a interface Produto fica assim 
function exibirProduto(produto) {
    console.log("Produto - ".concat(produto.produto));
    console.log("Pre\u00E7o - ".concat(produto.preco));
    console.log("Dispon\u00EDvel - ".concat(produto.disponivel ? 'Sim' : 'Não'));
}
exibirProduto({ produto: 'Mouse', preco: 59.90, disponivel: true });
