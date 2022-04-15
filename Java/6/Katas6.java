import java.util.Arrays;
import java.util.ArrayList;

public class Katas6{
    
    public static String[] TowerBuilder(int nFloors){
        String[] result = new String[nFloors];
        int spaces = nFloors - 1;

        for(int y = 0; y < nFloors; y++ ){
            String floor = "";
            int blocks = y*2 + 1;

            for( int x = 1; x <= spaces; x++)
                floor += " ";

            for( int x = 1; x <= blocks; x++)
                floor += "*";

            for( int x = 1; x <= spaces; x++)
                floor += " ";
            
            //~ System.out.println(floor);
            result[y] = floor;

            spaces--;
    }

    return result;
    }


    public static int[] twoSum(int[] numbers, int target){
        int[] result = new int[2];
        int n = numbers.length;

        for(int i = 0; i < n-1; i++){
            int pivot = numbers[i];

            for(int j = i+1; j < n; j++){
                int crawler = numbers[j];

                if( (pivot + crawler) == target){
                    result = new int[]{ i, j};
                    return result;
                }
            }
        }
        
        return null;
    }

    public static String[] inArray(String[] array1, String[] array2) {

        Arrays.sort(array1);
        
        ArrayList<String> result = new ArrayList<String>();

         for(String pivot : array1){
            for(String crawler: array2){
                if( crawler.contains(pivot) ){
                    result.add(pivot);
                    break;
                }
            }
          }    
         
        String[] r = result.toArray(new String[result.size()]);  
            
        return r;
	}

    public static String[] wave(String str) {
        ArrayList<String> lista = new ArrayList<String>();

        for(int i = 0; i < str.length(); i++){
            
            String left = str.substring(0,i);
            char c = str.charAt(i);
            String right = str.substring(i+1);

            if( Character.isLetter(c) ){
               c = Character.toUpperCase(c); 
               String word = left + c + right;
               lista.add(word); 
            }

        }

        String[] result = lista.toArray( new String[lista.size()] );
        
        return result;
    }


    public static String iterPi2String(Double epsilon) {

         Double quarter_pi = 0.0;
         Double pi = 4.0;

         int i = 0;
         int k = 1;   
             
         while( (Math.abs(Math.PI - pi)) > epsilon ){
             
            if( i % 2 == 0)
                quarter_pi += 1.0/(k);
            else
                quarter_pi -= 1.0/(k);
                
            pi = 4 * quarter_pi;
            
            i++;
            k += 2;
         }   
            
         return String.format("[%d, %.10f]", i, pi);
	}

    public static double areaOfPolygonInsideCircle(double circleRadius, int numberOfSides) {
        double r = circleRadius;
        int n = numberOfSides;

        int internal_angles = (n-2) * 180;
        double polygon_angle = 1.0*internal_angles/n;
        double triangle_angle = polygon_angle/2.0;
        double teta = 180 - 2.0*triangle_angle;

        double triangle_area = r*r * Math.sin( Math.toRadians(teta) )/ 2.0;

        double area = n * triangle_area;
        
    // Your code here
    String s = String.format("%.3f", area);
    area = Double.parseDouble(s);
    return area;
  }

    
    public static void main(String args[]){
       System.out.println(areaOfPolygonInsideCircle(3,3));
       System.out.println(areaOfPolygonInsideCircle(4,5));
       //~ System.out.println(Math.toRadians( 180 )); 
       
    }
  
}
