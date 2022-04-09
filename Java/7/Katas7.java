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

    public static void main(String[] args){
        System.out.println(printerError("aaaxbbbbyyhwawiwjjjwwm"));
        
       
    }
}
