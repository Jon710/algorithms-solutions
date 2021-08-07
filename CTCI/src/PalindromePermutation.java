// Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. 
// The palindrome does not need to be limited to just dictionary words.
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.) 

import java.util.Collection;
import java.util.HashMap;

public class PalindromePermutation {
  public boolean isPermutationOfPalindrome(String str) {
    StringBuilder stringBuilder = new StringBuilder(str);
    String newStr = stringBuilder.toString().toLowerCase().replaceAll(" ", "");

    HashMap<Character, Integer> hashMap = new HashMap<Character, Integer>();
    for (int i = 0; i < newStr.length(); i++) {
      int charCount = hashMap.getOrDefault(newStr.charAt(i), 0);
      hashMap.put(newStr.charAt(i), charCount + 1);
    }

    Collection<Integer> counts = hashMap.values();
    int numberOfOdds = 0;
    for (int charCount : counts) {
      if (charCount % 2 != 0)
        numberOfOdds++;

      if (numberOfOdds > 1)
        return false;

    }

    return true;
  }

  public static void main(String[] args) {
    PalindromePermutation pp = new PalindromePermutation();
    System.out.println(pp.isPermutationOfPalindrome("Tact Coa"));
  }
}