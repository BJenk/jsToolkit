export const numberWithCommas = (x:any) => {
    if(x === null || x === undefined){return ""}
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export const capitalize = (s:string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const lowercase = (s:string) => {
    return s.charAt(0).toLowerCase() + s.slice(1)
}