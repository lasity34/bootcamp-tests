

var countAllPaarl = function(str) {
	
    const newReg = [];
    const regNum = str.split(",");
    for (let i = 0; i < regNum.length; i++) {
        const loopedNum = regNum[i].trim();
      
      if (loopedNum.includes("CJ")) {
      newReg.push(loopedNum)
      }
    }
  
    return newReg.length
  }