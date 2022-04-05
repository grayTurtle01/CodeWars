import java.util.Arrays;

public class Sequence{
    static int[] reverse(int n){
        int v[] = new int[n];

        for(int i = 0,  x = n; i < n; i++, x--){
            v[i] = x;
        }

        return v;
    }

    public static void main(String[] args){
        int v[] = reverse(6);
        System.out.println(Arrays.toString(v));
    }
}
