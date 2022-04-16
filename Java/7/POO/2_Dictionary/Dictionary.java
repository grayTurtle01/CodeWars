import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Dictionary{
    ArrayList<String> keys = new ArrayList<String>();
    ArrayList<String> values = new ArrayList<String>();

    public void newEntry(String key, String value){
        keys.add(key);
        values.add(value);
    }

    public String look(String key){
        int index = keys.indexOf(key);
        if(index != -1){
            String value = values.get(index);
            return value;
        }
        else{
            return "Cant find entry for " + key;
        }
        
    }
    
    public static void main(String[] args){
        Map<String, String> dic = new HashMap<>();

        dic.put("k1", "v1");
        System.out.println(dic.get("k1"));
    }
}
