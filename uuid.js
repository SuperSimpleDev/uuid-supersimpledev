window.uuid = function() {
  /**
   * To create a uuid, we will first generate 16 random
   * numbers between 0 and 255, this means there are
   * 256^16 possible IDs (equal to 300000000... 38 zeroes)
   *
   * This is a really big number (this is like how many
   * atoms there are on a planet), so we can be confident
   * that this sequence of 16 numbers will be unique.
   *
   * We will use window.crypto to generate these numbers.
   * window.crypto is considered higher quality (it is
   * mathematically more random) than something like
   * Math.random()
   */
  const nums = window.crypto.getRandomValues(
    new Uint8Array(16)
  );

  /**
   * This function converts a number into the hex format.
   * Hex is just another way to represent a number, except
   * instead of counting from 0 to 9 (like we normally do),
   * we count from 0 to 15.
   *
   * So instead of counting 0, 1, 2, 3, ..., 8, 9, we
   * count 0, 1, 2, 3, ..., 8, 9, a, b, c, d, e, f
   * (a, b, ... f are used to represent 10, 11, ... 15)
   */
  function convertToHex(num) {
    let hex = num.toString(16);

    // If the hex number only has 1 digit (for example
    // 10 = 'a' in hex), add a 0 in front so that the
    // result always has 2 characters (using the same
    // example, 10 = '0a' with this change).
    if (hex.length === 1) {
      hex = '0' + hex;
    }

    return hex;
  }

  // Convert the 16 random numbers into hex and add some
  // dashes to make it a bit more readable.
  return (
    convertToHex(nums[0]) +
    convertToHex(nums[1]) +
    convertToHex(nums[2]) +
    convertToHex(nums[3]) +
    '-' +
    convertToHex(nums[4]) +
    convertToHex(nums[5]) +
    '-' +
    convertToHex(nums[6]) +
    convertToHex(nums[7]) +
    '-' +
    convertToHex(nums[8]) +
    convertToHex(nums[9]) +
    '-' +
    convertToHex(nums[10]) +
    convertToHex(nums[11]) +
    convertToHex(nums[12]) +
    convertToHex(nums[13]) +
    convertToHex(nums[14]) +
    convertToHex(nums[15])
  );
};
