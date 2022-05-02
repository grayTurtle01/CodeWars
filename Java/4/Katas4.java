import java.util.Arrays;
import java.util.ArrayList;

public class Katas4{

    // Travel through a matrix, like a snail in a clock-direction
    public static int[] snail(int[][] array) {
        int n = array.length;

        ArrayList<Integer> lista = new ArrayList<Integer>();

        // position
        int current_x = 0;
        int current_y = 0;

        // first row
        int[] first_row = array[0];

        if( first_row.length == 0)
            return new int[0] ;
        
        for(int x = 0; x < n; x++){
            int value = first_row[x];
            lista.add(value);
        }

        current_x = n-1;

        int delta = 1;
        
        // next-path
        while( lista.size() < n* n){
         
            // top-to-bottom
            for(int i = 1; i <= n-delta; i++){
                current_y++;
                int value = array[current_y][current_x];
                lista.add(value); 

            }

            // left-to-right
            for(int i = 1; i <= n-delta; i++){
                current_x--;
                int value = array[current_y][current_x];
                lista.add(value); 

            }
            delta++;

            // bottom-to-up
            for(int i = 1; i <= n-delta; i++){
                current_y--;
                int value = array[current_y][current_x];
                lista.add(value); 

            }
            // left-to-right
            for(int i = 1; i <= n-delta; i++){
                current_x++;
                int value = array[current_y][current_x];
                lista.add(value); 

            }
            delta++;


        }
        
        int[] result = lista.stream().mapToInt(item -> item).toArray();
       

        return result;
   } 


    // Seconds to human parameters time.
    // seconds --> (years, days, hours, minutes, seconds)
    public static String formatDuration(int seconds) {

        if( seconds == 0)
            return "now";

        int years = seconds / (60*60*24*365);
        seconds = seconds % (60*60*24*365);

        int days = seconds / (60*60*24);
        seconds = seconds % (60*60*24);

        int hours = seconds / (60*60);
        seconds = seconds % (60*60);

        int minutes = seconds / (60);
        seconds = seconds % (60);


        int counter = 0;
        String r = "";
        
        if( years > 0){
            if( years == 1 )
                r += " " + years + " year,";
            else
                r += " " + years + " years,";

            counter++;
        }       

        if( days > 0){
            if( days == 1 )
                r += " " + days + " day,";
            else
                r += " " + days + " days,";
            counter++;
        }

        if( hours > 0){
            if( hours == 1 )
                r += " " + hours + " hour,";
            else
                r += " " + hours + " hours,";
            counter++;
        }

        if( minutes > 0){
            if( minutes == 1 )
                r += " " + minutes + " minute,";
            else
                r += " " + minutes + " minutes,";
            counter++;
        }

        if( seconds > 0){
            if( seconds == 1 )
                r += " " + seconds + " second,";
            else
                r += " " + seconds + " seconds,";
            counter++;
        }

        // remove border spaces
        r = r.trim();

        // remove last auto coma
        r = r.substring(0, r.length()-1);


        // add ' and ' between the last and prelast item
        if(counter > 1){

            int last_coma = r.lastIndexOf(",");
            String left = r.substring(0,last_coma);

            String right = r.substring(last_coma+1 );

            r = left + " and" + right;
        }
        System.out.println(r);

        return r;
    }

    
    public static void main(String[] args){
       //~ formatDuration(60*60*24*365 + 60*60*24*3 + 60*60*2 + 121 );
       formatDuration(0);
    }
}
