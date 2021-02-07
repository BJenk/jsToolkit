//https://github.com/iamvictorli/Daily-Coding-Problem


import {arrayOfRandomNumbers} from '../tools/arrays'
import {randomNum} from '../tools/math'


//============
//Problem 1
//============

// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

const numFromList = (arr:Array<number>, target:number) => {
    let set = new Set(arr) 
    for(let i in arr){
        if(set.has(target-arr[i])){
            console.log(true)
            console.log((target-arr[i]), arr[i])
            return true
        }    
    }
}

// Problem 2
// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?




let testCases = {
    problem1: [
        numFromList([10, 8, 22, 7],17),
        numFromList([22,323,4325,43,7,22,45,6778,54,10, 8, 22, 7] ,331),
        numFromList(arrayOfRandomNumbers(10,100), randomNum(100))
    ]
}