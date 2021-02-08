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
            return true
        }    
    }
}

//==========
// Problem 2
//==========
// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

const arrayProduct = (arr) => {
    let arr2 = []
    for(let i in arr){
        arr2.push(
            arr
            .filter((x,j) => j!=i)
            .reduce((a,b) => {
                return a*b
            })
        )
    }
    return arr2
}

//=========
//Problem 3
//=========
//This problem was asked by Google.
//Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
//For example, given the following Node class

//============
// Problem 4
//============
// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.
const lowestPosNotInArr = (arr) => {
    let posArr = arr.filter(x => x>0).sort()
    let current = posArr[0]-1
    for(let i = 0; i<=posArr.length; i++){
        if((posArr[i] - 1) === current){
            current = current+1
        }else{
            return i+1
        }
    }
}


let testCases = {
    problem1: [
        numFromList([10, 8, 22, 7],17),
        numFromList([22,323,4325,43,7,22,45,6778,54,10, 8, 22, 7] ,331),
        numFromList(arrayOfRandomNumbers(10,100), randomNum(100))
    ],
    problem2:[
        arrayProduct([1, 2, 3, 4, 5]),
        arrayProduct([3, 2, 1]),
        arrayProduct(arrayOfRandomNumbers(10,100))
    ],
    problem3: [],
    problem4: [
        lowestPosNotInArr([3, 4, -1, 1]),
        lowestPosNotInArr([2, 4, -1, 1]),
        lowestPosNotInArr([1, 2, 0]),
        arrayProduct(arrayOfRandomNumbers(10,100))
    ]
}