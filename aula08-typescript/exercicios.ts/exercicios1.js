//Função que retorna tipos 
function produto(produto, preco, disponivel) {
    return "Produto: ".concat(produto, " - Pre\u00E7o: ").concat(preco, " - Dispon\u00EDvel: ").concat(disponivel ? 'Sim' : 'Não');
}
console.log(produto('Mouse', 59.90, true));
