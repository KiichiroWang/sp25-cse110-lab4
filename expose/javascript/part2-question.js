/*
function discountPrices(prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100 / 100);
        discounted.push(finalPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
}*/

// Question 9
function discountPrices2(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100 / 100);
        discounted.push(finalPrice);
    }

    return discounted;
}
console.log(discountPrices2([100, 200, 300], 0.5));

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year' : '2022',
    greetings: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: "CSE 110"
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
