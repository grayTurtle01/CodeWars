import java.util.Arrays;

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


    public static void main(String args[]){
       int[] v = {1,2,3};
       int[] r = twoSum(v, 4);
       System.out.println(Arrays.toString(r));
    }
  
}
