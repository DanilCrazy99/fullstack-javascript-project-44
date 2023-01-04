// получение рандомного числа.
// минимальное и максимальное значения включены в диапазон
const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

export default getRandomNum;
