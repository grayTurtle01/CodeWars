import java.util.*;
import java.util.stream.*;

public class Backronym {
  private static Map<String, String> dictionary = Preload.dictionary;
  
  public static String makeBackronym(String acronym) {
    String result = acronym.toUpperCase();
    char c;
    
    for(int i = 0; i < acronym.length(); i++){
      char c = acronym.charAt(i);
      String key =  Character.toString(c);
      String word = dictionary.get( key );
     
      result += word + " ";  
    }    

    result = result.trim();
      
    return result;
  }
}
