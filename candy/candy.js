/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length;
    let result = 0;
    let candies = new Array(len).fill(1);
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
     for(let i = len - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        }
    }
    
    for(let candy of candies) {
        result += candy;
    }
    return result;
};