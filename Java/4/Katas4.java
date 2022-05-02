import java.util.Arrays;
import java.util.ArrayList;

public class Katas4{
    
    public static int[] snail(int[][] array) {
        int n = array.length;

        ArrayList<Integer> lista = new ArrayList<Integer>();

        // position
        int current_x = 0;
        int current_y = 0;

        // first row
        int[] first_row = array[0];

        if( first_row.length == 0)
            return new int[0] ;
        
        for(int x = 0; x < n; x++){
            int value = first_row[x];
            lista.add(value);
        }

        current_x = n-1;

        int delta = 1;
        
        // next-path
        while( lista.size() < n* n){
         
            // top-to-bottom
            for(int i = 1; i <= n-delta; i++){
                current_y++;
                int value = array[current_y][current_x];
                lista.add(value); 

            }

            // left-to-right
            for(int i = 1; i <= n-delta; i++){
                current_x--;
                int value = array[current_y][current_x];
                lista.add(value); 

            }
            delta++;

            // bottom-to-up
            for(int i = 1; i <= n-delta; i++){
                current_y--;
                int value = array[current_y][current_x];
                lista.add(value); 

            }
            // left-to-right
            for(int i = 1; i <= n-delta; i++){
                current_x++;
                int value = array[current_y][current_x];
                lista.add(value); 

            }
            delta++;


        }
        
        int[] result = lista.stream().mapToInt(item -> item).toArray();
       

        return result;
   } 
    
    public static void main(String[] args){
        int[][] m = { {1,2,3}, {4,5,6}, {7,8,9} };
        int[][] m2 = { {1,2,3,4}, {5,6,7,8}, {9,10,11,12}, {13,14,15,16} };
        int[][] m3 = {{}};
        snail(m3); 
    }
}
