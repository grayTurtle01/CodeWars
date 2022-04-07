import java.util.Arrays;

public class Katas8 {

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

     public static int multiply(int x, int y){
        return x * y;
    }

    public static boolean isLove(final int flower1, final int flower2) {
        if( (flower1 + flower2) % 2 == 1)
          return true;
        else
          return false;
    }

    public static String toAlternativeString(String string) {
    // your code here!
        String result = "";
        for(int i = 0; i < string.length(); i++){
            char c = string.charAt(i);
            if( Character.isLowerCase(c) ){
                c = Character.toUpperCase(c);
            }
            else if( Character.isUpperCase(c) ){
                c = Character.toLowerCase(c);
            }

            result += c;
        }

        return result;
    }

    public static String fakeBin(String numberString) {
        String result = "";
        for(int i = 0; i < numberString.length(); i++){
            char digit = numberString.charAt(i);
            if( digit  < '5')
                result += '0';
            else
                result += '1';
            
        }
        
        return result;
    }

    public static void main(String args[]){
        System.out.println( fakeBin("1234567890"));
    }
}
