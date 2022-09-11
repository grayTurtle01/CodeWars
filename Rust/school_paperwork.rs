fn paperwork(n: i16, m: i16) -> u32 {
    if n < 0 || m < 0{
        return 0;
    }
    else{
        let result = n * m;
        let result_32 = result as u32;
        return result_32
    }
}

fn main(){
    println!("{}", paperwork(1,2));
}
