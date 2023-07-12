
function printEven(number) {
    for(let i = 0; i <= number; i+=2) {
        console.log(i)
    }
}

function fibSequence(length) {
    if (length === 1) {
        console.log(0)
        return
    }
    if (length >= 2) {
        let first = 0
        let second = 1
        console.log(0)
        console.log(1)
        for(let i = 2; i < length; i++){
            console.log(first + second)
            let temp = second
            second = first + second
            first = temp
        }
    }

}

function fibOptimized(len) {
    let fib=[0,1]
    if (len <= 2){
        for(let i = 0; i < len; i++) {
            console.log(fib[i])
        }
    }
    else {
        let sum
        console.log(0)
        console.log(1)
        for(let i = 2; i < len;i++) {
            sum = fib[i-1] + fib[i-2]
            console.log(sum)
            fib.push(sum)
        }
    }
}

function arrAvg(arr) {
    let sum = 0
    for (const el of arr) {
        sum += el
    }
    console.log(sum/arr.length)
}

function maxArr(arr) {
    console.log(arr.sort()[arr.length - 1])
}
function minArr(arr) {
    console.log(arr.sort()[0])
}

function cityArea(city) {
    switch (city.toLowerCase()) {
        case "nashville":
            return 615
            break
        case "new york":
            return 347
            break
        case "california":
            return 314
            break
    }
}

function countVowel(str) {
    let count = 0
    const vow = ['a','e','i','o','u']
    for (const ch of str) {
        if (vow.includes(ch)) {
            count++
        }
    }
    console.log(count)
}

function add(val1,val2) {
    return val1 + val2
}

function multiply(val1,val2) {
    return val1*val2
}

//TODO geocoding thing

function alphaSort(arr) {
    return arr.sort()
}

function ascDescSort(arr,order) {
    if (order.toLowerCase() === "asc") {
        return arr.sort()
    }
    else if (order.toLowerCase() === "desc") {
        return arr.sort().reverse()
    }
    else {
        console.log("incorrect value presented")
        return null
    }
}

function reverseNumb(numb) {
    numbArr = numb.toString().split("")
    return numbArr.reverse().join("")
}

function capitalize(str) {
    return str.toUpperCase()
}

function charOccur(str,chr) {
    let count = 0
    strArr = str.split("")
    for (const el of strArr) {
        if (el === chr) {
            count ++
        }
    }
    return count
}

function filterStrArray(arr, filtString) {
    return arr.filter(function(el){
        return el != filtString
    })
}

function filterNumArray(arr, filtNum) {
    return arr.filter(function(el) {
        return el != filtNum
    })
}

function filterObj(arr,id) {
    return arr.filter(function(el) {
        return el.id != id
    })
}

function returnObj(arr,id) {
    for(const el of arr) {
        if(el.id === id) {
            return el
        }
    }
}

function todaysDate() {
    const date = new Date
    return date
}

function tenLarger(arr) {
    return arr.filter(function(el) {
        return el > 10
    })
}



printEven(50)
fibSequence(10)
fibOptimized(10)
arrAvg([1,4,7,8,4])
maxArr([1,34,5,4,5,54,63,3])
minArr([346,7,4,3,3,35,7,6,5,64])
countVowel("hello world")
console.log(add(4,6))
console.log(multiply(4,6))
console.log(alphaSort(['b','c','a']))
console.log(ascDescSort([1,4,6,6,4,3,6,2], "ASC"))
console.log(ascDescSort([1,4,6,6,4,3,6,2], "DESC"))
console.log(ascDescSort([1,4,6,6,4,3,6,2], "other"))
console.log(reverseNumb(1352435))
console.log(capitalize("functions are fun"))
console.log(charOccur("hello world", "l"))
console.log(filterStrArray(["hello","world","family","class"], "world"))
console.log(filterNumArray([1,2,3,4,5], 3))
console.log(todaysDate())
console.log(tenLarger([1,3,5,61,5,54,24]))






