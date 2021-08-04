// ASCII has 256 characters at most. Unicode is 4bytes, extra space would be needed.

import java.util.HashSet;

public class IsUnique {
    boolean hasUniqueCharacters(String str) {
        HashSet<Character> mySet = new HashSet(256);

        if (str.length() > 256)
            return false;

        for (int i = 0; i < str.length(); i++) {
            if (mySet.contains(str.charAt(i))) {
                return false;
            } else {
                mySet.add(str.charAt(i));
            }
        }
        return true;
    }

    public static void main(String[] args) {
        IsUnique iu = new IsUnique();

        System.out.println(iu.hasUniqueCharacters("abcder"));
        System.out.println(iu.hasUniqueCharacters("joao"));
        System.out.println(iu.hasUniqueCharacters("palmeiras"));
    }
}
