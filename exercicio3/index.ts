function userReview(review:number|boolean):string{
    if(typeof(review)=='number'){
        const response:string = `a nota foi: ${review}` 
        return response
    }
    if(typeof(review)=='boolean'){
        const response:string = 'não foi feita uma avaliação'
        return  response
    }
}

console.log(userReview(3))
console.log(userReview(false))