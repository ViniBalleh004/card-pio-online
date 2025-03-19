const botoesAdicionar = document.
querySelectorAll('.adicionar');

const listaPedido = document.getElementById
('lista-pedido');

const totalElemento = document.getElementById
('total');

let total = 0;

botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement;

        const nome = produto.querySelector
        ('h3').textContent;

        const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$" , ))

        const itemPedido = document.createElement('li');

        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(1)}`;
        
        listaPedido.appendChild(itemPedido);

        total += preco;

        totalElemento.textContent = `Total: R$ ${total.toFixed(1)}`;



    })
});

const botoesFinalizarPedido = document.getElementById
(`finalizar-pedido`);

botoesFinalizarPedido.addEventListener("click", () =>{
    alert("Pedido finalizado com sucesso" + totalElemento.textContent);
})