const TimeLimit = (goodTimes, badTimes) => {
    const maxGoodTime = Math.max.apply(null, goodTimes)
    const minBadTime = Math.min.apply(null, badTimes)
    // console.log(maxGoodTime, minBadTime)
    if(maxGoodTime<=minBadTime) return minBadTime-1
    else return -1
   
}

module.exports = {
    TimeLimit
}