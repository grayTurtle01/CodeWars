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
