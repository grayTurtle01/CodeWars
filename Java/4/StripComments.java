import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.IntStream;

public class StripComments {

	public static String stripComments(String text, String[] commentSymbols) {
        
        int left_index = 0;

        String result = "";

        // get lines
        ArrayList<String> lines = new ArrayList<String>();

        int begin_line = 0;
        
        for(int i = 0; i < text.length(); i++){
            String c = "" + text.charAt(i);
            if( c.equals("\n") ){
                String line = text.substring(begin_line, i);
                begin_line = i + 1;

                lines.add(line);
            }

            // last line
            if( i == text.length()-1 ){
                String line = text.substring(begin_line);
                lines.add(line);
            }

        }

        for( String line: lines){

            // empty line
            if( line.length() == 0){
                result += "\n";
                continue;
            }

            // contente line
            for( int i = 0; i < line.length(); i++){

                String c = "" + line.charAt(i);

                // remove comment
                if( Arrays.asList(commentSymbols).contains(c)){
                    String code = line.substring(0, i);
                    code = code.replaceAll("\\s*$", "");
                    code += "\n";
                    result += code;
                    break;
                }

                // line witout-comments
                if( i == line.length() -1 ){
                    String code = line.replaceAll("\\s*$", "");
                    result += code + "\n";
                }
                

            }
            
        }

        String last_line = lines.get(lines.size()-1);
        result = result.substring(0, result.length()-1);

		return result;
	}

    public static void main(String args[]){
        System.out.println("");
        String s = "first line #primer comentario\n" +
                   "secondline !segundo comentario";

        String text = "apples, pears # and bananas\ngrapes\nbananas !apples";
        text = " bb\n aaa";
        text = " bb\n \n\naaa";
        text = "uno\n\ndos\ntres\n\n";
        //~ text = "\neb\n\nbad\n\neeecc\n\ne\n";

        
        System.out.println("-------");
        System.out.println(text);
        System.out.println("---------");

        String[] commentSymbols = {"#", "!"};

        System.out.println("\n--------");
        System.out.println(stripComments(text, commentSymbols));
        System.out.println("----------");
    }
}
