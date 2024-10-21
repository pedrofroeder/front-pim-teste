document.getElementById('addImageCheckbox').addEventListener('change', function() {
    const imageUpload = document.getElementById('imageUpload');
    if (this.checked) {
        imageUpload.style.display = 'block';
    } else {
        imageUpload.style.display = 'none';
    }
});

document.getElementById('supplierForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro finalizado com sucesso!');
});