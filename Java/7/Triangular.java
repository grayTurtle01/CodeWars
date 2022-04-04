// 7 Triangular Treasure
// get the nth triangular number

public class Triangular{
    static long triangular(long n){
        if( n <= 0 ){
            return 0;
        }
        else{
            long n_triangular_number = (n)*(n+1)/(2);
            return n_triangular_number;
        }
    }

    public static void main(String[] args){
        System.out.println(triangular(3));
    }
}
