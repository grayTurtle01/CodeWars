public class Solution {
    
    public static String generateName(PhotoManager photoManager) {
        String name = "";

        while( name.isEmpty() ){
            for(int i = 1; i <= 6; i++){
                int random_number = (int)(Math.random() * 26) + 65;
                char c = (char)random_number;
                name += c;
            }

            if( photoManager.nameExists() )
                name = "";
        }
                
        return name;
    }
}


