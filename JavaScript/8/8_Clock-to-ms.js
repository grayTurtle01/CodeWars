function past(h, m, s){

    let ms = 0
    ms += s * 1000
    ms += m * 60 * 1000
    ms += h * 60 * 60 * 1000  

    return ms
}
