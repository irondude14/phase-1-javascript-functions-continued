function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(call = "a hard worker") {
    const promt1 = function(wrapper = "*") {
        return `You are ${call}${wrapper}${call}!`
    }
     return promt1
}