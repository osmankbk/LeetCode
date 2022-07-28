/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
     let minimumCandies = 0;
    let len = ratings.length;
    let candies = new Array(len).fill(1);
    
    for(let i = 1; i < len; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
    for(let i = ratings.length - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    
    for(let candy of candies) {
        minimumCandies += candy;
    }
    
    return minimumCandies;
};