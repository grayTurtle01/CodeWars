import java.util.Arrays;

public class Katas {

    public static long[] powerOfTwo(int n) {
        long powers[] = new long[n+1];
        
        for(int i = 0; i <= n; i++){
            powers[i] = (long)Math.pow(2,i);
        }

        return powers;
    }

    static String removeExclamationMarks(String s) {
        String result = "";
        
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if( c == '!' ){
                System.out.println(c);
            }
            else{
                result += c;
            }
        }
        
        return result;
    }

    public static void main(String args[]){
        String s = removeExclamationMarks("hello ! world");
        System.out.println(s);

    }
}
