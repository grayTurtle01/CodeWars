import java.util.*;
import java.util.stream.*;

public class Backronym {
  private static Map<String, String> dictionary = Preload.dictionary;
  
  public static String makeBackronym(String acronym) {
    String result = "";
    String C = "";
      
    for(int i = 0; i < acronym.length(); i++){
      C = "";
      char c = acronym.charAt(i);
      c = Character.toUpperCase(c);
      C += c;
      String word = dictionary.get( C );
     
      
      result += word + " ";  
    }    

    result = result.trim();
      
    return result;
  }
}
