"use strict"

const date = new Date();

function durationBetweenDates(start, end, measure) {

    const startDate = new Date(start);
    const endDate = new Date(end);

    let result = endDate - startDate;

    switch(measure) {
        case 'seconds':
            result = result / 1000;
            break;
        case 'minutes':
            result = result / (1000 * 60);
            break;
        case 'hours':
            result = result / (1000 * 60 * 60);
            break;
        case 'days':
            result = result / (1000 * 60 * 60 * 24);
            break;
        default:
            return 'Default';

    }
    return `${result} ${measure}`;

}


console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'




const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {

    let updatedPriceData = {};

    for (const key in data) {
        const newKey = key.toLowerCase();
        const newData = parseFloat(data[key]).toFixed(2);

        updatedPriceData[newKey] = newData;

    }
    return updatedPriceData;
}
let updatedPriceData = optimizer(priceData);





console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}