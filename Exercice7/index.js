function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    
    const decimalNumber = parseInt(decimalInput, 10);
    
    if (isNaN(decimalNumber)) {
        document.getElementById('binaryResult').textContent = 'Veuillez entrer un nombre décimal valide.';
        return;
    }
    
    const binaryResult = decimalNumber.toString(2);
    
    document.getElementById('binaryResult').textContent = `Représentation binaire : ${binaryResult}`;
}