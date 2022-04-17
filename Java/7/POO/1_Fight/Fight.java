class Fighter{
    String name;
    int health;
    int damagePerAttack;

    public Fighter(String name, int health, int damagePerAttack){
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
    }

}

public class Fight{

    public static void main(String args[]){
        Fighter f1 = new Fighter("Ryu", 100, 20);
        Fighter f2 = new Fighter("Ken", 100, 24);

        String winner = declareWinner(f1, f2, "Ryu");
        System.out.println(winner);
        
    }

    public static String declareWinner(Fighter fighter1, Fighter fighter2, String firstAttacker) {
        
        Fighter first, second;
        
        if( fighter1.name == firstAttacker ){
            first = fighter1;
            second = fighter2;
        }
        else{
            first = fighter2;
            second = fighter1;    
        }

        while( first.health > 0 && second.health > 0){
            second.health -= first.damagePerAttack;
            first.health -= second.damagePerAttack;
        }

        if( second.health <= 0)
            return first.name;

        if( first.health <= 0)
            return second.name;
            
        
        return "";
    }
}
