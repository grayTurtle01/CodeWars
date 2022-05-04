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




    public static void main(String[] args){
        System.out.println("Hello Sudoku");
    }
}
