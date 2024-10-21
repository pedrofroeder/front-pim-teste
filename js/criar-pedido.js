document.getElementById('sendEmailButton').addEventListener('click', function() {
    const supplierEmail = document.getElementById('supplierEmail').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const description = document.getElementById('description').value;

    const subject = encodeURIComponent('Novo Pedido: ' + product);
    const body = encodeURIComponent(`Produto: ${product}\nQuantidade: ${quantity}\nDescrição: ${description}`);
    
    const mailtoLink = `mailto:${supplierEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});