fn main(){

    let mut v = vec![4,1,5,3,6,2,7,8];
    println!("{:?}", v);

    v = buble_sort(v);
    println!("{:?}", v);

    let median = get_median(v);
    println!("{median}");
}

fn get_median(mut v: Vec<i32> ) -> i32{
    v = buble_sort(v);

    if v.len() % 2 == 1{
        let mid_index = v.len()/2;
        return v[mid_index]
    }
    else{
        let right = v.len()/2;
        let left = v.len()/2 - 1;

        let average = (v[left] + v[right])/2;
        return average
        
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
