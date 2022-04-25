import java.util.List;
import java.util.ArrayList;

enum Color {
    RED, GREEN, BLUE
}

interface MysteryColorAnalyzer {
    /**
     * This method will determine how many distinct colors are in the given list
     *
     * <p>
     * Colors are defined via the {@link Color} enum.
     * </p>
     *
     * @param mysteryColors list of colors from which to determine the number of distinct colors
     * @return number of distinct colors
     */
    int numberOfDistinctColors(List<Color> mysteryColors);

    /**
     * This method will count how often a specific color is in the given list
     *
     * <p>
     * Colors are defined via the {@link Color} enum.
     * </p>
     *
     * @param mysteryColors list of colors from which to determine the count of a specific color
     * @param color color to count
     * @return number of occurrence of the color in the list
     */
    int colorOccurrence(List<Color> mysteryColors, Color color);
}


class MysteryColorAnalyzerImpl implements MysteryColorAnalyzer{
    
    public int numberOfDistinctColors(List<Color> mysteryColors){

        int counter = 0;
        ArrayList<Color> lista = new ArrayList<Color>();

        for( Color color : mysteryColors){
            if( !lista.contains(color) ){
                lista.add(color);
                counter++;
            }
        }

        return counter;
        
    }

    public int colorOccurrence(List<Color> mysteryColors, Color color){


        int counter = 0;
        for(Color c : mysteryColors){
            if( c == color ){
                counter++;
            }
        }
        
        return counter;
    }
}

public class App{

    public static void main(String[] args){
        System.out.println("Hello");
    }
}
