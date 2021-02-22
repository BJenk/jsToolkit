
//create object with keys from array
const createObjectFromArray = (arr:Array<any>=[], val:any=null) => {
    return arr.reduce((o,key) => Object.assign(o,{[key]: val}), {})
}