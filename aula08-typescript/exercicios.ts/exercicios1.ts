//Interface para objeto Produto
interface Produto {
    produto: string;
    preco: number;
    disponivel: boolean; 
}

//Utilizando a interface Produto fica assim 
function exibirProduto(produto: Produto): void {
    console.log(`Produto - ${produto.produto}`)
    console.log(`Preço - ${produto.preco}`)
    console.log(`Disponível - ${produto.disponivel ? 'Sim' : 'Não'}`)
}

exibirProduto({ produto: 'Mouse', preco: 59.90, disponivel: true});