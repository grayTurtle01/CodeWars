use std::collections::HashMap;

fn main(){

    let v = vec![1,1,2,2,2,1,3,3,3,3];
    println!("{:?}", v);
    

    let mode = get_mode(v);
    println!("{mode}");
}

fn get_mode(v: Vec<i32> ) -> f32{

    let mut dic = HashMap::new();
    dic.insert(-1, -1);
    let mut mode = dic[&-1];

    for x in &v {
        
       let count = dic.entry(*x).or_insert(0);
       *count += 1;
    }

    for( key, value ) in &dic {
        if value  > &mut mode {
            mode = *key;
        }
    }


    return mode as f32;
    
}

