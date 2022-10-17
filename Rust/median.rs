fn main(){

    let mut v = vec![4,1,5,3,6,2];
    println!("{:?}", v);

    v = buble_sort(v);
    println!("{:?}", v);

    let median = get_median(v);
    println!("{median}");
}

fn get_median(mut v: Vec<i32> ) -> f32{
    v = buble_sort(v);

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


fn buble_sort(mut v: Vec<i32> ) -> Vec<i32>{

    let n = v.len();

    for i in 0..n-1 {
        for j in i+1..n {

            if v[i] > v[j] {
                let tmp = v[i];
                v[i] = v[j];
                v[j] = tmp;
        
            } 
          
        }
    }

    return v
}
