const non_repeat_substring = function (str) {
  // BRUTE FORCE
  // let longest = 0;

  // for (let i=0; i< str.length; i++) {
  //     let char = str.charAt(i);
  //     let set = new Set([char]);

  //     for (let j= i + 1; j < str.length; j++) {
  //         let char = str.charAt(j);
  //         if (set.has(char)) {
  //             break;
  //         } else {
  //             set.add(char);
  //         }

  //         longest = Math.max(longest, set.size);
  //     }
  // }

  // return longest;

  // Sliding window approach (optimized)
  let left = 0;
  let right = 0;
  let longestSubstring = 0;
  let set = new Set();

  while (right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      right++;
      longestSubstring = Math.max(set.size, longestSubstring);
    } else {
      set.delete(str[left]);
      left++;
    }
  }

  return longestSubstring;
};
