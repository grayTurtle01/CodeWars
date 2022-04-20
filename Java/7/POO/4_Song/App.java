import java.util.ArrayList;

class Song{
    String title;
    String artist;

    ArrayList<String> users = new ArrayList<String>();

    public Song(String title, String artist){
        this.title = title;
        this.artist = artist;
    }

    public String getTitle(){ return title; }
    public String getArtist(){ return artist; }

    public int howMany(ArrayList<String> names ){
        int new_people = 0;
        
        for(String name : names){
            name = name.toLowerCase();
            if( users.contains(name) == false ){
                users.add(name);
                new_people++;
            }
        }
        
        return new_people;   
    }
    
}

public class App{

    public static void main(String[] args){
        Song s = new Song("Money", "Pink Floyd");
       
        ArrayList<String> lista = new ArrayList<String>();
        lista.add("uno");
        lista.add("dos");
        lista.add("Dos");
        lista.add("Tres");

        System.out.println(s.howMany(lista));
    
        
    }
}
