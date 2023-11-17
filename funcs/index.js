const isFive = (num) => {
    return num === 5;
}

function isOdd(num) {
    if (!Number.isInteger(num)) throw new Error('Must be an Integer');
    return (num % 2 === 1 || num % 2 === -1) ? true : false;
}

const myRange = (min, max, step = 1) => {
    const range = [];

    for (let i = min; i <= max; i += step) {
        const num = i;
        range.push(i);
    }

    return range;
}

module.exports = {
    isFive,
    isOdd,
    myRange
}
