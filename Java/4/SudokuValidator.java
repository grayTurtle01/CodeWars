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


    public static void main(String[] args){
        System.out.println("Hello Sudoku");
    }
}
