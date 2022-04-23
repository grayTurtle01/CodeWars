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

    public static boolean isDivisible(long n, long x, long y) {
        // your code
        if( n % x == 0 && n % y == 0)
          return true;
        
        return false;
	}

    public static String convert(boolean b){
        return b? "true": "false";
    }

    public static String greet(String name) {
    
        if(name.equals("Johnny")){
          return "Hello, my love!";
        }
        
        return String.format("Hello, %s!", name);
    
    }

    public static char getChar(int c) {
        char character = (char)c;
        return character;
    }

    public static int[] squareOrSquareRoot(int[] array){

        for(int i = 0; i < array.length; i++){
            int x = array[i];

            double root = Math.sqrt(x);
          
            if( root % 1 == 0)
                array[i] = (int)root;
            else
                array[i] *= array[i];
            
        } 
        return array;
    }

    public static String bmi(double weight, double height) {
        double bmi = weight / (height * height);

        if( bmi <= 18.5 )
            return "Underweight";
        if( bmi <= 25.5 )
            return "Normal";
        if( bmi <= 30.0 )
            return "Overweight";
        if( bmi > 30.0 )
            return "Obese";
        
    }

    public static void main(String args[]){
        int[] v = {4,2,1,9,3};
        v = squareOrSquareRoot(v);
        System.out.println(Arrays.toString(v));
    }
}
