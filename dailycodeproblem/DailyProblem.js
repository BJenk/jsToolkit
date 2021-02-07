//https://github.com/iamvictorli/Daily-Coding-Problem

//============
//Problem 1
//============

// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

//[10, 8, 22, 7], 17

let numFromList = (arr, target) => {
    let set = new Set(arr) 
    for(let i in arr){
        if(set.has(target-arr[i])){
            console.log(true)
            console.log((target-arr[i]), arr[i])
            return
        }    
    }
}

numFromList([10, 8, 22, 7],17)
numFromList([22,323,4325,43,7,22,45,6778,54,10, 8, 22, 7] ,331)
numFromList()