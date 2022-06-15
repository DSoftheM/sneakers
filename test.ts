/* toLocaleString('ru') */
const splitPrice = (price: number): string => {
    const priceArr = [...price.toString()];
    for (let i = priceArr.length - 3; i > 0; i -= 3) {
        priceArr.splice(i, 0, ' ');
    }
    return priceArr.join('');
}



console.log(Array(10).fill(null).map(item => 2));

function f(): string {
    return '';
}

type fType = ReturnType<typeof f>;



// Todo: реализовать корзину
// Todo: реализовать поиск