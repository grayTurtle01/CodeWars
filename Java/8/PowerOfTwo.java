import java.util.Arrays;

public class PowerOfTwo {

    public static long[] powerOfTwo(int n) {
        long powers[] = new long[n+1];
        
        for(int i = 0; i <= n; i++){
            powers[i] = (long)Math.pow(2,i);
        }

        return powers;
    }

    public static void main(String args[]){
        long powers[] = powerOfTwo(10);
        System.out.println(Arrays.toString(powers));
    }
}
