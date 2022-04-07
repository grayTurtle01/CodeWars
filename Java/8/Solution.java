// if the polygon is a square return area
// if the polygon is a rectangule return perimeter
public class Solution {
    public static int areaOrPerimeter (int l, int w) {
        if( l == w)
            return l*l;

        else
            return 2*(l+w)
    }
}
