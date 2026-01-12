
function consecutiveSubstrings(string) {
  const result = [];
  
  // Outer loop: each character as starting position
  for (let i = 0; i < string.length; i++) {
    // Inner loop: extend substring to each ending position
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }
  
  return result;
}

if (require.main === module) {
  // Test cases
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
  
  console.log("");
  
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
  
  console.log("");
  
  console.log("Expecting: ['p', 'ph', 'pho', 'phon', 'phone', 'h', 'ho', 'hon', 'hone', 'o', 'on', 'one', 'n', 'ne', 'e']");
  console.log("=>", consecutiveSubstrings('phone'));
}

module.exports = consecutiveSubstrings;