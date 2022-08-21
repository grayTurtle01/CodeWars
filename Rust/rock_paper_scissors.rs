// Rock, Paper, Scissors Game
fn rps(p1: &str, p2: &str) -> &'static str  {
    
    if p1 == p2 {
        return "Draw!";
    }
    else if  p1 == "rock" && p2 == "scissors" {
        return "Player 1 won!";
    }
    else if p1 == "paper" && p2 == "rock"{
        return "Player 1 won!";
    }
    else if p1 == "scissors" && p2 == "paper"{
        return "Player 1 won!";
    }
    else{
        return "Player 2 won!";
    }
    
}

fn main(){
    println!("{}", rps("scissors", "paper"));
}
