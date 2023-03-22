var totalPhoneBill = function(str) {

    let totalBill = 0;
    const feeType = str.split(",")

    for (let i = 0; i < feeType.length; i++) {
        const loopedFees = feeType[i]

        if(loopedFees.includes("sms")) {
            totalBill += 0.65
        } else if (loopedFees.includes('call')){
            totalBill += 2.75
        }
    }

    const wholeNum = totalBill.toFixed(2)

    return `R${wholeNum}`

}