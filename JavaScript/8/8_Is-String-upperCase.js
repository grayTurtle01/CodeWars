String.prototype.isUpperCase = function() {
    let str = String(this)

    let regex = /[a-z]/

    if( regex.test(str) == true )
        return false

    return true
}

let s = "ABCD WORLD a"
console.log(s.isUpperCase())


//~ console.log(/^[a-z]+$/.test('AA'))
