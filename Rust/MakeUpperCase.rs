fn make_upper_case(s: &str) -> String {

    let mut result = String::from("");

    for c in s.chars() {

        let capital = &c.to_uppercase();
        
        result.push_str(&capital.to_string()) 
    }

    return result
}

fn main(){
    let s = make_upper_case("hello");
    println!("{s}");
}
