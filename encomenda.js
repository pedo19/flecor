document.getElementById('submit-button').addEventListener('click', function() {
    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    // Número do WhatsApp do administrador (incluindo o código do país)
    const adminWhatsApp = '+244932599282'; // Substitua pelo número do administrador

    // Cria a mensagem a ser enviada
    const message = `Pedido de Encomenda:%0A%0ANome: ${name}%0AEndereço: ${address}%0AProduto: ${product}%0AQuantidade: ${quantity}`;

    // Cria a URL do WhatsApp com a mensagem
    const whatsappURL = `https://wa.me/${adminWhatsApp}?text=${message}`;

    // Abre a URL do WhatsApp em uma nova aba
    window.open(whatsappURL, '_blank');
});



function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMenu() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}
