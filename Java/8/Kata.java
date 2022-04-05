public class Kata {
  public static int[] invert(int[] array) {
    int n = array.length;
      
    int v2[] = new int[n];
    
    for(int i = 0; i < (array.length); i++){
        v2[i] = -array[i];
    }
  
    return v2;
  }

  public static void main(String[] args){
    int v1[] = {1,2,3,4,5};

    int v2[] = invert(v1);
    
  }  

}
