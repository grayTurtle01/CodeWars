public class Block{
	// Good Luck!
    int width, length, height;

    public Block(int[] v){
        this.width = v[0];
        this.length = v[1];
        this.height = v[2];
    }

    public int getWidth(){  return width; }
    public int getLength(){  return length; }
    public int getHeight(){  return height; }

    public int getVolume(){
        return width * length * height;
    }

    public int getSurfaceArea(){
        int face1 = width * length;
        int face2 = width * height;
        int face3 = length * height;

        return 2 * ( face1 + face2 + face3);
        
    }
}
