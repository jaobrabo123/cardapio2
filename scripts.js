let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade += 1;
        itemExistente.precoTotal += preco;
    } else {
        carrinho.push({ nome, precoUnitario: preco, quantidade: 1, precoTotal: preco });
    }

    total += preco;
    atualizarCarrinho();
}

function removerDoCarrinho(nome) {
    const itemIndex = carrinho.findIndex(item => item.nome === nome);
    
    if (itemIndex > -1) {
        const item = carrinho[itemIndex];
        total -= item.precoUnitario;

        if (item.quantidade > 1) {
            item.quantidade -= 1;
            item.precoTotal -= item.precoUnitario;
        } else {
            carrinho.splice(itemIndex, 1);
        }
        
        atualizarCarrinho();
    }
}

function removerTudo() {
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoItens = document.getElementById('carrinho-itens');
    const totalElement = document.getElementById('carrinho-total');

    carrinhoItens.innerHTML = '';

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nome} (x${item.quantidade}) - R$ ${item.precoTotal.toFixed(2)} 
                        <button onclick="removerDoCarrinho('${item.nome}')">Remover</button>`;
        carrinhoItens.appendChild(li);
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const formularioContato = document.getElementById('contato-form');
    const mensagemEnviada = document.getElementById('mensagem-enviada');

    formularioContato.addEventListener('submit', (event) => {
        event.preventDefault();

        mensagemEnviada.style.display = 'block';


        formularioContato.reset();


    });
});
