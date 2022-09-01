var capitals = function (word) {

    let capitals = []
    for( index in word ){
       let c = word[index] 
       if( c >= 'A' && c <= 'Z' ){
            capitals.push(index)
        }
            
    }

    return capitals
};


//~ console.log( capitals("Hello World"))

str = "Hello World"
for( i=0; i<str.length; i++ ){
    console.log(typeof(i))
}
