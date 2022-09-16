function capMe(names) {
    let result = names.map( name => {
        let capital = name[0].toUpperCase()

        return capital + name.slice(1).toLowerCase()
    })

    return result
}

console.log( capMe(['jo', 'nelson', 'jurie']) )
