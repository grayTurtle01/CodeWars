var greet = function(name) {
    let N = name[0].toUpperCase()
    let ame = name.slice(1).toLowerCase()
    
    return "Hello " + N + ame + "!"
};


console.log(greet("bob"))
