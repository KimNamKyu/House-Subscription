export const getWeek =() => {
    let currentDay = new Date()
    let theYear = currentDay.getFullYear();
    let theMonth = currentDay.getMonth();
    let theDate  = currentDay.getDate();
    let theDayOfWeek = currentDay.getDay();
    
    let thisWeek = [];
    
    for(let i=0; i<7; i++) {
        let resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        let yyyy = resultDay.getFullYear();
        let mm:any = Number(resultDay.getMonth()) + 1;
        let dd:any = resultDay.getDate();
    
        mm = String(mm).length === 1 ? '0' + mm : mm;
        dd = String(dd).length === 1 ? '0' + dd : dd;
        
        thisWeek[i] = yyyy + '-' + mm + '-' + dd;
    }
    return thisWeek;
}

export const getDay = () => {
    let day = new Date('2021-04-28')
    return day.getFullYear() + '-' + (day.getMonth() + 1).toString().padStart(2,'0') + '-' + day.getDate().toString().padStart(2,'0')
}

export const dateChecker = (start: any, end:any) => {
    let startDate = new Date(start)
    let endDate = new Date(end)
    let currentDate = new Date(getDay())
    if(currentDate >= startDate && currentDate <= endDate) {
        console.log('true')
        return true;
    }else{
        return false;
    }

}