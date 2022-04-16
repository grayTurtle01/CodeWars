import java.util.ArrayList;

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
        Dictionary d = new Dictionary();

        d.newEntry("k1", "v1");
        d.newEntry("k2", "v2");

        System.out.println(d.look("k3"));
    }
}
