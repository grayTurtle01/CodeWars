fn main(){

    let mut v = vec![4,1,5,3,6,2];
    println!("{:?}", v);
    
    v.sort();
    println!("{:?}", v);

    let median = get_median(v);
    println!("{median}");
}

fn get_median(mut v: Vec<i32> ) -> f32{
    v.sort();

    if v.len() % 2 == 1{
        let mid_index = v.len()/2;
        return v[mid_index] as f32;
    }
    else{
        let right = v.len()/2;
        let left = v.len()/2 - 1;

        let suma = v[left] + v[right];
        let suma_float = suma as f32;
        
        return suma_float/2.0
        
    }

    
}

