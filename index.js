const createEmployeeRecord = (row)=>
     ({
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    })


const createEmployeeRecords = (employeeRowData)=> 
     employeeRowData.map((row)=>createEmployeeRecord(row))


const createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

const createTimeOutEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

const hoursWorkedOnDate = function(soughtDate){
    const inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    const outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

