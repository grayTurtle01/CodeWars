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


    public static void main(String args[]){
        String[] r = wave("two words");
        System.out.println(Arrays.toString(r));
    }
  
}
