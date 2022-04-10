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

    public static void main(String[] args){
        int v[] = {1,2,-1,5,-2};
        Arrays.sort(v);
        
        System.out.println(Arrays.toString(  v ));
       
    }

    
}
