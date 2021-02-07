export const loopArray = (index:number, arr:Array<any>) => {
    let floor:number = Math.floor(index/arr.length)
    if(index>=arr.length){
        index = (index- (arr.length*floor))
    }
    return arr[index]
}