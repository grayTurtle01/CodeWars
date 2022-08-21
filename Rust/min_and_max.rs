fn minimum(arr: &[i32]) -> i32 {
    
    let mut min = arr[0];

    for x in arr{
        if x < &min{
            min = *x;
        }
    }

    return min;
}

fn maximum(arr: &[i32]) -> i32 {
    let mut max = arr[0];

    for x in arr {
        if x > &max {
            max = *x;
        }
    }

    return max;
}


fn main(){
    let v = [1,2,3,4,-2,10];
    println!("min: {}", minimum(&v) );
    println!("max: {}", maximum(&v) );
}
