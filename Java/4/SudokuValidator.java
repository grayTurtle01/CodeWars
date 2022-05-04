import java.util.ArrayList;
import java.util.Arrays;


public class SudokuValidator{
    
    public static boolean checkLine(int[] line){
        ArrayList<Integer> list = new ArrayList<Integer>();

        for( int value: line){
            if( value == 0)
                return false;
            
            if( list.contains(value) ){
                return false;
            }

            list.add(value);
        }

        return true;
    }

    public static int[] getColumn(int[][] m, int colNumber){
        int n = m.length;
        int[] column = new int[n];

        for(int y = 0; y < n; y++){
            column[y] = m[y][colNumber];
        }

        return column;
    }

    public static boolean checkAllRows(int[][] m){

        for(int[] row : m){
            if( checkLine(row) == false ){
                System.out.println("Wrong Row:");
                System.out.println(Arrays.toString(row));
                return false;
            }
        }

        return true;
    }

    public static boolean checkAllColumns(int[][] m){
        int[] column;

        for(int i = 0; i < 9; i++){
            column = getColumn(m, i);
            if( checkLine(column) == false ){
                System.out.println("Wrong Column:");
                System.out.println(Arrays.toString(column));
                return false;
            }
        }

        return true;
    }

    public static boolean checkBlock(int[][] block){
        ArrayList<Integer> list = new ArrayList<Integer>();

        for( int y = 0; y < 3; y++){
            for(int x = 0; x < 3; x++){
                int value = block[y][x];
                if( list.contains(value) )
                    return false;

                list.add(value);
            }
        }

        return true;
    }

    public static int[][] getBlock(int[][] m, int x0, int y0){
        int[][] block = new int[3][3];

        for(int y = y0; y < y0+3; y++){
            for(int x = x0; x < x0+3; x++){

                int y_block = y - y0;
                int x_block = x - x0;
                
                block[y_block][x_block] = m[y][x];
            }
        }

        return block;
    }

    public static void printMatrix(int[][] m){
        int n = m.length;
        
        for( int y = 0; y < n; y++ ){
            for( int x = 0; x < n; x++)
                System.out.print(m[y][x]);

            System.out.println("");
        }
    }

    public static boolean checkAllBlocks(int[][] m){
        int[][] block;

        for(int y = 0; y < 9; y += 3){
            for(int x = 0; x < 9; x+= 3){
                block = getBlock(m, x, y);

                if( checkBlock(block) == false){
                    System.out.println("Wrong block: ");
                    printMatrix(block);
                    return false;
                }
            }
        }

        return true;
    }

    public static boolean check(int[][] sudoku) {
        //do your magic
        boolean state = true;

        if( checkAllRows(sudoku)  == false )
            return false;

        if( checkAllColumns(sudoku)  == false )
            return false;

        if( checkAllBlocks(sudoku)  == false )
            return false;

        
        return true;
    }

    public static void main(String args[]){
        int[] row = {1,2,3,4};

        int[][] m = {
                      {5, 3, 4, 6, 7, 8, 9, 1, 2},
                      {6, 7, 2, 1, 9, 5, 3, 4, 8},
                      {1, 9, 8, 3, 4, 2, 5, 6, 7},
                      {8, 5, 9, 7, 6, 1, 4, 2, 3},
                      {4, 2, 6, 8, 5, 3, 7, 9, 1},
                      {7, 1, 3, 9, 2, 4, 8, 5, 6},
                      {9, 6, 1, 5, 3, 7, 2, 8, 4},
                      {2, 8, 7, 4, 1, 9, 6, 3, 5},
                      {3, 4, 5, 2, 8, 6, 1, 7, 9}
                      };

        int[] column = getColumn(m, 0);
        //~ System.out.println(Arrays.toString(column));
        //~ System.out.println(checkLine(row));

        //~ checkAllRows(m);
        //~ checkAllColumns(m);

        //~ int[][] block = getBlock(m, 3, 0);
        //~ printMatrix(block);
        //~ System.out.println(checkBlock(block));

        //~ checkAllBlocks(m);
        check(m);
        
            
    }
    



}
