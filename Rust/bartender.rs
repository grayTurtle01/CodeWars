fn get_drink_by_profession(param: &str) -> &'static str {

    let s: String = param.to_lowercase(); 
    let option: &str = &s[..];


    match option {
        "jabroni" => "Patron Tequila",
        "school counselor" => "Anything with Alcohol",
        "programmer" => "Hipster Craft Beer",
        "bike gang member" => "Moonshine",
        "politician" => "Your tax dollars",
        "rapper" => "Cristal",
        _ => "Beer"
    }
}

fn main(){
    println!("{}", get_drink_by_profession("programmer"));

}
