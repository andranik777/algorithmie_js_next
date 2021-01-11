const computeFactorialIt = (n) => {
    let b = 1;
    for (let i = 1; i <= n; i++) { b *= i }
    return b
}

// recursive 

const computeFactorialRec = (n) => {
    if (n === 0) {
        return 1
    } else {
        return n * computeFactorialRec(n - 1)
    }
}

const computePowerIt = (n, p) => { return (n == undefined || p == undefined ? 0 : n ** p) }


const computePower2 = (n, p) => {
    return (n == undefined || p == undefined ? 0 : n * computePowerIt(n, p - 1))
}

computePowerRec = (n, p) => {

    if (p === 0) {
        return n = 1
    } else {
        return n * computePowerRec(n, p - 1)
    }
}


const computeSquareRoot = (n) => { return Math.sqrt(n) }


// nombre premier

const isPrimeNumber1 = (n) => {

    if (n == undefined) { return undefined } else { return (n % 2 == 0 && n > 2 ? false : true) }
}

var isPrimeNumber = (n) => {
        let result
        if (n == 0 || n == 1) {
            return false
        } else if (n == 2) {
            return true
        }
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                result = false
                break;
            } else {
                result = true
            }
        }
        return result

    }
    // Trouver un nombre premier

const findSupPrime = (n) => {
    res = n
    while (isPrimeNumber(res) == false) {
        res += 1
    }
    return res
}