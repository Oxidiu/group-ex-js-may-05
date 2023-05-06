const jsonData = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;

function isPrime(num) {
    if (num == 2 || num == 3) return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i <= num; i += 6)
        if (num % i == 0 || num % (i + 2) == 0) return false;
    return true;
}

function isEven(num) {
    return num % 2 === 0;
}



const actionCallback = (arg) => {
    const parsed = JSON.parse(arg);
    return parsed
}
function convert(data, actionCb) {
    return actionCb(data);
}
const convertedData = convert(jsonData, actionCallback);
// console.log(convertedData);

const {data} = convertedData;
// console.log(data);

class DataProcess {
    constructor(data) {
        this._data = data;
    }

    sortData() {
        this._data.sort((a, b) => a - b)
    }

    calculateTotal() {
        this.total = this._data.reduce((acc, current) => {
            return acc + current;
        })
    }
    isEven() {
        return this.total % 2 === 0;
    }

    doDouble() {
        this.doubled = this._data.map((num) => num * 2)
    }
    
    static getOdd(data) {
        return data.filter((num) => num % 2 === 1)
    }

    static getEven(data) {
        return data.filter((num) => num % 2 === 0)
    }

    printProp() {
        console.log("Data:")
        console.log(this._data);

        console.log("Total:")
        console.log(this.total);

        console.log("Doubled:")
        console.log(this.doubled);
        
    }

    smaller() {
        this.smaller = this._data.filter((num) => num < 50)
    }

    toJSON() {
        return {
            data: this._data,
            total: this.total,
            doubled: this.doubled
        }
    }
}
const dataProcess = new DataProcess(data);

console.log("Unsorted:")
console.log(dataProcess)

dataProcess.sortData();
console.log("Sorted:")
console.log(dataProcess);

dataProcess.calculateTotal()
console.log("Total:")
console.log(dataProcess.total)

console.log("Is total even?")
console.log(dataProcess.isEven())

dataProcess.doDouble();
console.log("Doubled:")
console.log(dataProcess.doubled);

console.log("Odd numbers:")
console.log(DataProcess.getOdd(data));

console.log("Even numbers:")
console.log(DataProcess.getEven(data));

console.log("Proprieties:")
dataProcess.printProp()

dataProcess.smaller();
console.log("Smaller:")
console.log(dataProcess.smaller)

console.log("JSON Stringified:")
console.log(JSON.stringify(dataProcess))