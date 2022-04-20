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

    public int howMany(String[] names ){
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
        //~ System.out.println(s.getTitle());

        String[] names = {"ana", "bob", "John", "john"};
        System.out.println(s.howMany( names ));
        
        System.out.println(s.howMany( new String[]{"pep", "ana", "boby"} ));

    
        
    }
}
