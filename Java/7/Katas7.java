import java.util.Arrays;

public class Katas7{
    
    public static long triangular(long n){
        if( n <= 0 ){
            return 0;
        }
        else{
            long n_triangular_number = (n)*(n+1)/(2);
            return n_triangular_number;
        }
    }

    public static Integer prevMultOfThree(int n){
        if( n % 3 == 0)
            return n;
            
        else{

            while( n % 3 != 0){  
                String str_n = "";
                str_n += n;

                
                str_n = str_n.substring(0, str_n.length()-1);
                System.out.println(str_n);

                if( str_n.isEmpty() )
                    return null;


                n = Integer.parseInt(str_n);
            }
            return n;
        }

    }

    public static String printerError(String s) {
        int length = s.length();
        char c;
        int errors = 0;

        for(int i = 0; i < length; i++){
            c = s.charAt(i);
            if( c > 'm')
                errors++;
        }

        String result = errors + "/" +length;
        
        return result;
    }

    public static int[] minMax(int[] arr) {
        // Your awesome code here
        int min = (int)Math.pow(2,31);
        int max = -(int)Math.pow(2,31);


        for(int i = 0; i < arr.length; i++){
            int x = arr[i];

            if( x < min){
                min = x;
            }

            if ( x > max){
                max = x;
            }

        }
        
        int result[] = {min, max}; 
        
        return result;
    }

    public static int predictAge(int age1, int age2, int age3, int age4, int age5, int age6, int age7, int age8) {
        // your code goes here
        int[] ages = {age1, age2, age3, age4, age5, age6, age7, age8  };
      
        int result = 0;
        for(int i = 0; i < ages.length; i++){
          result += ages[i] * ages[i];
          
        }
        result = (int)Math.sqrt(result);
        result = (int)(result/2);
        
        return result;
      
    }

    public static int largestPairSum(int[] numbers){
        // your code here
        Arrays.sort(numbers);
        int n = numbers.length;
      
        return numbers[n-1] + numbers[n-2];
    }

    public static String reverseLetter(final String str) {
        String result = "";
        
        for(int i = str.length()-1;  i >= 0; i --){
            char c = str.charAt(i);
            if( Character.isLetter(c) )
                result += c;
        }
        
        return result; 
    }

    public static int minSum(int[] passed){
        Arrays.sort(passed);
        System.out.println(Arrays.toString(passed));
        int result = 0;

        
        int n = passed.length;
            
        for(int i = 0; i < n/2; i++){
            result += passed[i] * passed[n-1-i];
            System.out.println(result);
        }
        
        return result; 
    }

    public static Double calculate(final double numberOne, final String operation, final double numberTwo){
        Double result = null;

        switch(operation){
            
            case "+":
                result = numberOne + numberTwo;
                break;
                
            case "-":
                result = numberOne - numberTwo;
                break;

            case "*":
                if( numberOne == 0 || numberTwo == 0 )
                    return 0.0;
                    
                result = numberOne * numberTwo;
                break;

            case "/":
                if( numberTwo == 0){
                    result = null;
                    break;
                }
                result = numberOne / numberTwo;
                break;

            default:
                result = null;
    }

    return result;
  }

    public static int sumOfAngles(int n) {
    // Code here
        return 180 * (n-2);
    }

    public static long maxProduct(int[] numbers, int sub_size){
        long result = 1;

        Arrays.sort(numbers);
        int n = numbers.length;
        
        for(int i = n-1; i >= n-sub_size; i-- ){
            result *=  numbers[i];
        }

        return result;
    }

    public static String[][] partlist(String[] arr) {
        String[][] result = new String[arr.length-1][];

        String left = "";
        String right = "";

        for(int i = 0; i < arr.length-1; i++){
            left = "";
            right = "";

            for(int x = 0;  x <= i; x++ ){
                left += arr[x] + " ";
            }

            for(int y = i + 1;  y < arr.length; y++){
                right += arr[y] + " ";
            }

            left = left.trim();
            right = right.trim();

            result[i] = new String[]{left, right};

        }

        return result;
    }

    public static String switcheroo(String x) {
        String result = "";

        for(int i = 0; i < x.length(); i++){
            char c = x.charAt(i);
            
            if( c == 'a')
                result += 'b';
    
            else if( c == 'b')
                result += 'a';
                
            else
                result += c;
            
        }
        
        return result;
    }

    public static void main(String[] args){
        String s = switcheroo("acb");
        
        System.out.println(s);
    }

    
}
