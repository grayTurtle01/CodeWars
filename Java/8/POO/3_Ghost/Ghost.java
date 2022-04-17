public class Ghost{
    String[] colors = {"white", "yellow", "purple", "red"};
    String color;

    public Ghost(){
        int random_index = (int)Math.floor(Math.random() * 4);
        String random_color = colors[random_index];

        color = random_color;
    }

    public String getColor(){
        return color;
    }
    
    public static void main(String[] args){
        Ghost g = new Ghost();
        System.out.println(g.getColor());
    }
}
