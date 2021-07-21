import java.util.Arrays;

// Given 2 strings, write a method to decide if one is a permutation of the other.
public class CheckPermutation {
    public boolean checkPermutation(String str1, String str2) {
        if (str1.length() != str2.length()) return false;
        return sort(str1).equals(sort(str2));
    }

    public static String sort(String s) {
        char[] content = s.toCharArray();
        Arrays.sort(content);
        return new String(content);
    }

    public static void main(String[] args) {
        CheckPermutation c = new CheckPermutation();

        System.out.println(c.checkPermutation("aabsd", "aba"));
        System.out.println(c.checkPermutation("joao", "oaoj"));
        System.out.println(c.checkPermutation("palmeiras", "porco"));
    }
}
