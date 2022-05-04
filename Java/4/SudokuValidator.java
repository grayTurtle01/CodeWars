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



    public static void main(String[] args){
        System.out.println("Hello Sudoku");
    }
}
