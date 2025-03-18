// Array para armazenar os itens do carrinho
let carrinho = [];

// Selecionar todos os botões "Adicionar"
const botoesAdicionar = document.querySelectorAll('.adicionar');
const listaPedidos = document.getElementById('lista-pedidos');
const botaoFinalizar = document.querySelector('.finalizar');

// Função para atualizar a lista de pedidos
function atualizarCarrinho() {
    if (carrinho.length === 0) {
        listaPedidos.innerHTML = '<p><em>Seu carrinho está vazio por enquanto.</em></p>';
    } else {
        listaPedidos.innerHTML = ''; // Limpa a mensagem inicial
        carrinho.forEach((item, index) => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.nome} - ${item.preco}`;
            listaPedidos.appendChild(itemElement);
        });
    }
}

// Adicionar evento a cada botão "Adicionar"
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement;
        const nome = produto.querySelector('b').textContent;
        const preco = produto.querySelector('.preco').textContent.split('|')[0].trim(); // Pega o primeiro preço (ex.: R$ 25,00)

        // Adicionar item ao carrinho
        carrinho.push({ nome, preco });
        atualizarCarrinho();
    });
});

// Evento para o botão "Finalizar Pedido"
botaoFinalizar.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio! Adicione itens antes de finalizar.');
    } else {
        alert('Pedido finalizado com sucesso!\nItens:\n' + carrinho.map(item => `${item.nome} - ${item.preco}`).join('\n'));
        carrinho = []; // Limpa o carrinho
        atualizarCarrinho();
    }
});