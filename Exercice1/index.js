export const pairNumbers = (min, max) => {
    const pairs = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            pairs.push(i);
        }
    }
    return pairs.join(',');
}

export default pairNumbers;