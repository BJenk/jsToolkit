export const loopArray = (index:number, arr:Array<any>) => {
    let floor:number = Math.floor(index/arr.length)
    if(index>=arr.length){
        index = (index- (arr.length*floor))
    }
    return arr[index]
}

export const arrayOfRandomNumbers = (length:number, power:number) => {
    let l:number = (length) ?  length : 10
    let p:number = (power)  ?  power : 100
   return new Array(l).fill(0).map(x => x + Math.floor(Math.random()*p))
   //TODO: Include options for positives and negatives
}

export const needleInHaystack = (haystack:Array<any>, needle:any) => {
    return haystack.reduce((a, b) => {
        let aDiff = Math.abs(a - needle);
        let bDiff = Math.abs(b - needle);
        if (aDiff == bDiff) {
            return a > b ? a : b;
        } else {
            return bDiff < aDiff ? b : a;
        }
    });
}

export const onlyUniqueValuesArray = (a) => {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

export const onlyUniqueValuesArrayV2 = (a) => {
    return [...new Set(a)]
}

export const twoArraysMatch = (arr1:Array<any>, arr2:Array<any>) => {
	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;
	// Check if all items exist and are in the same order
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	// Otherwise, return true
	return true;
};

export const arrayContainsArrayVals = (arr1:Array<any>, arr2:Array<any>) => {
    //check to see if arr1 contains all the values of arr2
    const result = arr2.filter(x => arr1.includes(x))
    return twoArraysMatch(result.sort(),arr2.sort())
}

export const arrayReducers = {
    sumOfArr : (x) => {
         if(x.every(function(a){return a===null})){return null}
         return x.reduce(function(a,b){return a + b})
    },
    averageOfArr : (x) => {
         if(x.every(function(a){return a===null})){return null}
         return x.reduce(function(a,b){return a + b})/x.length
     },
     productOfArr: (x) => {
        if(x.every(function(a){return a===null})){return null}
        return x.reduce(function(a,b){return a * b})
     },
    maxOfArr : (x) => {
        let max = 0
        for(let i in x){
             max = (x[i] > max) ? x[i] : max
        }
        return max
     },
    minOfArr : function(x) {
         let min = x[0]
         for(let i in x){
             min = (x[i] < min) ? x[i] : min
         }
         return min
     },
     medianOfArr: null,
     meanOfArr:   null,
 }

// recursively slices an array into smaller chunks
// first parameter is the initial array, second parameter is the length of subarray
// arraySlicer([1,2,3,4,5,6,7,8,9], 3) => [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// arraySlicer([1,2,3,4,5,6,7,8,9,10,11,12,13], 5) => [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10],[11, 12, 13]]
export const arraySlicer = (arr, len) => {
    if(arr.length<=0){return[]}
    return [ arr.slice(0,len), ...arraySlicer(arr.slice(len), len)]
}