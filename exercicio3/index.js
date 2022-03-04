function userReview(review) {
    if (typeof (review) == 'number') {
        var response = "a nota foi: ".concat(review);
        return response;
    }
    if (typeof (review) == 'boolean') {
        var response = 'não foi feita uma avaliação';
        return response;
    }
}
console.log(userReview(3));
console.log(userReview(false));
