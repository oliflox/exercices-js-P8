function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    
    if (!/^\d+$/.test(decimalInput)) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }
    
    const decimalNumber = parseInt(decimalInput, 10);
    
    if (isNaN(decimalNumber)) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }
    
    const binaryResult = decimalNumber.toString(2);
    
    document.getElementById('binaryResult').textContent = `Représentation binaire : ${binaryResult}`;
}