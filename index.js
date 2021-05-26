const TimeLimit = (goodTimes, badTimes) => {
    const maxGoodTime = Math.max.apply(null, goodTimes)
    const minBadTime = Math.min.apply(null, badTimes)
    var minTime = -1
    if(maxGoodTime<=minBadTime) minTime = minBadTime-1
    return minTime
   
}

module.exports = {
    TimeLimit
}