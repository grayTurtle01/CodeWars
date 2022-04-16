public class God {
  public static Human[] create(){
      
      Man Adam = new Man("Adam");
      Woman Eve = new Woman("Eve");

      Human[] humans = {Adam, Eve};

      return humans;  
  }
}

class Human{
    String name = "";
    
    public Human(String name){
        this.name = name;
    }
}

class Man extends Human{
    String cromo = "XY";

    public Man(String name){
        super(name);
    }
}


class Woman extends Human{
    String cromo = "XX";

    public Woman(String name){
        super(name);
    }
}
