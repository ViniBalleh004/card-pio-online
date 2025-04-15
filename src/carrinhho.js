const botoesAdicionar = document.querySelectorAll('.adicionar');
const listaPedido = document.getElementById('lista-pedido');
const totalElemento = document.getElementById('total');
let total = 0;

botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement;
        const nome = produto.querySelector('h3').textContent;
        
        // Corrigindo a extração do preço
        const precoTexto = produto.querySelector('.preco').textContent;
        const preco = parseFloat(precoTexto.replace("R$", "").trim());

        const itemPedido = document.createElement('li');
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
        
        listaPedido.appendChild(itemPedido);

        total += preco;
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    })
});

const botoesFinalizarPedido = document.getElementById('finalizar-pedido');

botoesFinalizarPedido.addEventListener("click", () => {
    alert("Pedido finalizado com sucesso! " + totalElemento.textContent);
});
