export const getCurrentYear = () => {
    return new Date().getFullYear();
};

export const getRandomValue = (maxValue, minValue) => {
    return Math.ceil(Math.random() * (maxValue - minValue) + minValue);
}
