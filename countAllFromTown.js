var countAllFromTown = function(reg, location) {

    const newReg = [];
    const regNum = reg.split(",")
    for (let i = 0; i < regNum.length; i++) {
        const loopedStr = regNum[i].trim();

        if (loopedStr.includes(location)) {
            newReg.push(loopedStr)
        }
    }
    return newReg.length
}