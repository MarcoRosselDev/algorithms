function dropElements(arr, fn) {

    for (let i = 0; i < arr.length; i++) {
        let ok = fn(arr[i])
        if (ok) {
            return arr.slice(i)
        }
    }
}

function fn(num) {
    if (num) {
        return true
    } else {
        return false
    }
}