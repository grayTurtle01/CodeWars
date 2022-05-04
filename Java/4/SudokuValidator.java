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


    public static void main(String[] args){
        System.out.println("Hello Sudoku");
    }
}
