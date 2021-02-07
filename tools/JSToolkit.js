//Toolkit 

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

const arrayReducers = {
    sumOfArr : function(x){
         if(x.every(function(a){return a===null})){return null}
         return x.reduce(function(a,b){return a + b})
    },
    averageOfArr : function(x){
         if(x.every(function(a){return a===null})){return null}
         return x.reduce(function(a,b){return a + b})/x.length
     },
    maxOfArr : function(x) {
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
     }
 }


 const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}


const arraysMatch =  (arr1, arr2) => {
	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;
	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	// Otherwise, return true
	return true;
};

const arrayContainsArrayVals = (arr1, arr2) => {
    //check to see if arr1 contains all the values of arr2
    const result = arr2.filter(x => arr1.includes(x))
    return arraysMatch(result.sort(),arr2.sort())
}


const stateAbbreviations = (state) =>  {
    let abbr = {"alabama" : "AL","alaska" : "AK","arizona" : "AZ","arkansas" : "AR","california" : "CA","colorado" : "CO","connecticut" : "CT","delaware" : "DE","florida" : "FL","georgia" : "GA","hawaii" : "HI","idaho" : "ID","illinois" : "IL","indiana" : "IN","iowa" : "IA","kansas" : "KS","kentucky" : "KY","louisiana" : "LA","maine" : "ME","maryland" : "MD","massachusetts" : "MA","michigan" : "MI","minnesota" : "MN","mississippi" : "MS","missouri" : "MO","montana" : "MT","nebraska" : "NE","nevada" : "NV","new hampshire" : "NH","new jersey" : "NJ","new mexico" : "NM","new york" : "NY","north carolina" : "NC","north dakota" : "ND","ohio" : "OH","oklahoma" : "OK","oregon" : "OR","pennsylvania" : "PA","rhode island" : "RI","south carolina" : "SC","south dakota" : "SD","tennessee" : "TN","texas" : "TX","utah" : "UT","vermont" : "VT","virginia" : "VA","washington" : "WA","west virginia" : "WV","wisconsin" : "WI","wyoming" : "WY" }
    let returnAbbr = (abbr[state.toLowerCase()]) ? abbr[state.toLowerCase()] : state
    return returnAbbr
}



const findDaysInMonth = (date) =>{
    var month = date.getMonth()
    var year = date.getFullYear()
    var leapYearCheck = function(){
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            return 29
        }
        else{
            return 28
        }
    }
    var daysInMonths = [31, leapYearCheck(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
   return daysInMonths[month]
}



const monthYear = (date) => {
    let s = date.split(" 1 ").join(" ")
    return s
}

const dateFormatter = (date)=>{
    date = new Date(date)
    if(date !== null){
        var formattedDate:string = 
        months[date.getMonth()] 
        + " " + date.getDate() 
        + ", " + date.getFullYear()
        return formattedDate
    }
}



const dateTimeFormatter = (date)=>{
    date = new Date(date)
    let hours =   (date.getHours()%12 === 0) ? "12" : date.getHours()%12 
    let minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()
    let ampm = (date.getHours() >= 12 ) ? "PM" : "AM"  
    date = new Date(date)
    if(date !== null){
        let formattedDate:string = 
        months[date.getMonth()] 
        + " " + date.getDate() 
        + ", " + date.getFullYear()
        + " " + hours
        + ":" + minutes
        + " " + ampm
        return formattedDate
    }
}

const dateTimeFormatter24HR = (date) => {
    const hours =   date.getHours() 
    const minutes = (date.getMinutes() === 0) ? "00" : date.getMinutes()
    const formattedDate = 
        months[date.getMonth()] 
        + " " + date.getDate() 
        + ", " + date.getFullYear()
        
            + " " + hours
            + ":" + minutes
            //+ " " + ampm
        
    return formattedDate
}

const goBackDays=(q:number)=>{
    let d = new Date();
    d.setDate(d.getDate() - q);
    return d
}

const getTomorrowDate=(date)=>{
    let tomorrow = new Date(date)
    return new Date(tomorrow.setDate(tomorrow.getDate() + 1))
}

const dayIntervalSeries = (interval) => {
    let intervalsInHour = 60/interval
    let arr = []
    for(let x = 0; x<24; x++){
        for(let i = 1; i<intervalsInHour+1; i++){
            let pushArr = (i===intervalsInHour) ? x+1 + ":00" : x + ":" + i*interval
            pushArr = (pushArr === "24:00") ? "00:00" : pushArr
            arr.push(pushArr)
        }
    }
    return arr
}

var monthsBetween2Dates = function(start,end,format){
    if(format === undefined) format = "dateObject"
    var numOfYears = new Date(end).getFullYear() - new Date(start).getFullYear()
    var monthArr = []
    var startYear = new Date(start).getFullYear()
    var formatter = function(x,i){
        return (new Date(months[x] + " 1 " + Number(startYear+i)))
    }
    if(numOfYears>0){
        for(var i=0; i<=numOfYears;i++){
            if(i===0){
                for(var x = 0; x<(12-new Date(start).getMonth()); x++){
                    monthArr.push(formatter((new Date(start).getMonth()  + x),i))
                }
            }
            else if(0<i && i<numOfYears){
                for(var x = 0; x<12; x++){
                    monthArr.push(formatter(x,i))
                }
            }
            else{
                for(var x = 0; x<new Date(end).getMonth()+1; x++){
                    monthArr.push(formatter(x,i))
                }
            }
        }
    }else{
        var singleYearMonths = new Date(end).getMonth() - new Date(start).getMonth()
        var startNum = new Date(start).getMonth()
        for(var x = 0; x<=singleYearMonths; x++){
            monthArr.push(
                //Firefox does some weird stuff with date formatting. It requires a day of month
                new Date(months[x + startNum] + " 1 " + Number(startYear).toString())
            )
        }
    }
    returnArr = {
        dateObject : monthArr,
        monthString : monthArr.map(function(x){return months[new Date( new Date(x).getTime() + (new Date(x).getTimezoneOffset()*60000) ).getMonth()]}),
        monthYearArr : monthArr.map(function(x){
            return (
                months[new Date(new Date(x).getTime() + (new Date(x).getTimezoneOffset()*60000)).getMonth()] + " " +
                new Date(new Date(x).getTime() + (new Date(x).getTimezoneOffset()*60000)).getFullYear()
            )
         })
    }
    return returnArr[format]
}

const pastTwelveMonths = () =>{
    let newStart = months.slice(new Date().getMonth())
    let newEnd = months.slice(0, new Date().getMonth())
    let slicedMonthArr = newStart.concat(newEnd).reverse()
    let end = slicedMonthArr[slicedMonthArr.length-1]
    slicedMonthArr.pop()
    slicedMonthArr.unshift(end)
    let year = new Date().getFullYear()
    let monthArr = []
    for(let x in slicedMonthArr){
        if(slicedMonthArr[x]==="December"){
            year = year-1
        }
        monthArr.push(slicedMonthArr[x] + " " + year.toString())
    }
    monthArr.shift()
    return monthArr
}

const changeDateRange = {
    startDate: (r) =>{
        if(!isNaN(new Date(r).getMonth())){
            return `${months[new Date(r).getMonth()]} 1 ${new Date(r).getFullYear()}`
        }else{
            return `${months[new Date().getMonth()]} 1 ${new Date().getFullYear()}`
        }
    },
    endDate: (r) => {
        if(!isNaN(new Date(r).getMonth())){
            return `${months[new Date(r).getMonth()]} ${findDaysInMonth(new Date(r))} ${new Date(r).getFullYear()}`
        }else{
            return `${changeDateRange.yesterdayDate()}`
        }
    },
    yesterdayDate: () => {
        let d = new Date();
        if(d.getDate() !== 1){
            d.setDate(d.getDate() - 1)
        }
        let yesterdayDate = d.getDate()
        return `${months[new Date().getMonth()]} ${yesterdayDate} ${new Date().getFullYear()}`
    },
}


const monthsBetween2Dates = function(start,end,format){
    if(format === undefined) format = "dateObject"
    let numOfYears = new Date(end).getFullYear() - new Date(start).getFullYear()
    let monthArr = []
    let startYear = new Date(start).getFullYear()
    let formatter = function(x,i){
        return (new Date(months[x] + " 1 " + Number(startYear+i)))
    }
    if(numOfYears>0){
        for(let i=0; i<=numOfYears;i++){
            if(i===0){
                for(let x = 0; x<(12-new Date(start).getMonth()); x++){
                    monthArr.push(formatter((new Date(start).getMonth()  + x),i))
                }
            }
            else if(0<i && i<numOfYears){
                for(let x = 0; x<12; x++){
                    monthArr.push(formatter(x,i))
                }
            }
            else{
                for(let x = 0; x<new Date(end).getMonth()+1; x++){
                    monthArr.push(formatter(x,i))
                }
            }
        }
    }else{
        let singleYearMonths = new Date(end).getMonth() - new Date(start).getMonth()
        let startNum = new Date(start).getMonth()
        for(let x = 0; x<=singleYearMonths; x++){
            monthArr.push(
                //Firefox does some weird stuff with date formatting. It requires a day of month
                new Date(months[x + startNum] + " 1 " + Number(startYear).toString())
            )
        }
    }
    let returnArr = {
        dateObject   : monthArr,
        monthString  : monthArr.map(function(x){return months[new Date( new Date(x).getTime() + (new Date(x).getTimezoneOffset()*60000) ).getMonth()]}),
        monthYearArr : monthArr.map(function(x){
            return (
                months[new Date(new Date(x).getTime() + (new Date(x).getTimezoneOffset()*60000)).getMonth()] + " " +
                new Date(new Date(x).getTime() + (new Date(x).getTimezoneOffset()*60000)).getFullYear()
            )
         })
    }
    return returnArr[format]
}

const getSlicedDay = function(arr:Array<any>, selectedDate:Date){
    let slicedArr = []
    for(let i in arr){
        if(
            new Date(
                arr[i][0] + new Date(arr[i][0]).getTimezoneOffset() * 60000
            ).getDate() 
            === 
            selectedDate.getDate()
        ){
            slicedArr.push(arr[i])
        }
    }
    let returnArr = slicedArr.map((x) => [
        // (x[0] - new Date(x[0]).getTimezoneOffset()*60000),
        x[0],
        x[1]
    ])
    return returnArr
}

//Takes an arbitrary time within a day and sets it to the start of that day
const setTimeToBaseDate = function(time){
    let tzFixedTime = time + new Date(time).getTimezoneOffset()*60000
    let m = months[new Date(tzFixedTime).getMonth()]
    let d = new Date(tzFixedTime).getDate()
    let y = new Date(tzFixedTime).getFullYear()
    let baseDay = new Date(`${m.toString()} ${d.toString()} ${y.toString()}`)
    return baseDay
}

const adjustTZ = (date, timeZone) => {
    const zones = {
        EST : 'America/New_York',
        CST : 'America/Chicago',
        MST : 'America/Denver',
        PST : 'America/Vancouver'
    }
    return new Date(date.toLocaleString('en-US', { timeZone: zones[timeZone] }))
}


const shortDateFormatter = (date,format) => {
    let newDate = new Date(date)
    let hours =   (newDate.getHours()%12 === 0) ? "12" : newDate.getHours()%12 
    let minutes = (newDate.getMinutes() < 10) ? "0" + newDate.getMinutes() : newDate.getMinutes()
    let ampm = (newDate.getHours() >= 12 ) ? "PM" : "AM"  
    let dateFormats = {
        'MM/DD':`${newDate.getMonth()+1}/${newDate.getDate()}`,
        'Month/DD':`${months[newDate.getMonth()].slice(0,3)} ${newDate.getDate()}`,
        'MM/DD/YY':`${newDate.getMonth()+1}/${newDate.getDate()}/${newDate.getFullYear().toString().slice(2)}`,
        'MM/DD/YYYY':`${newDate.getMonth()+1}/${newDate.getDate()}/${newDate.getFullYear().toString()}`,
        'Day MM/DD/YYYY':`${days[newDate.getDay()].slice(0,3)}, ${newDate.getMonth()+1}/${newDate.getDate()}/${newDate.getFullYear().toString()}`,
        'MM/DD HH/MM':`${newDate.getMonth()+1}/${newDate.getDate()} ${hours}:${minutes} ${ampm}`,
        'Month/DD HH/MM':`${months[newDate.getMonth()].slice(0,3)} ${newDate.getDate()}  ${hours}:${minutes} ${ampm}`,
        'HH/MM' : `${hours}:${minutes}`,
        '24HH/MM' : `${newDate.getHours()}:${minutes}`,
        'Day/MM/DD' : `${days[newDate.getDay()].slice(0,3)} ${months[newDate.getMonth()].slice(0,3)} ${newDate.getDate()}`,
        'Day/MM/DD YYYY' : `${days[newDate.getDay()].slice(0,3)} ${months[newDate.getMonth()].slice(0,3)} ${newDate.getDate()}, ${newDate.getFullYear()}`
    }
    
    return `${dateFormats[format]}`
}




