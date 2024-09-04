export const calculateAverage = (numbers) => {
    if (!numbers) {
        return 'No numbers to calculate average';
    }
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    return sum / numbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
