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


  public static void main(String args[]){
      String s = "*";
      System.out.println( s.repeat(1) );
  }
  
}
