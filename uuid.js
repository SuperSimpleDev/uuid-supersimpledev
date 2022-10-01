/**
 * UUID = Universally Unique Identifier
 *
 * This function generates a different, unique string
 * every time we run it. Because this string is almost
 * guaranteed to be unique every time, we can use it as
 * an ID without worrying about getting duplicate IDs.
 */
window.uuid = function() {
  /**
   * To create a uuid, we will first generate 16 random
   * numbers between 0 and 255, this means there are
   * 256^16 possible IDs (equal to 300000000... 38 zeroes)
   *
   * This is a really big number (more than the number
   * of grains of sand on Earth), so we can be confident
   * that this sequence of 16 numbers will be unique.
   *
   * Here, we use window.crypto to generate these random
   * numbers instead of something like Math.random()
   * because window.crypto is higher quality (it is more
   * mathematically random). Although Math.random() also
   * works and you can try doing this with Math.random()
   * as an exercise at the end of the lesson.
   */
  const randomNumbers = window.crypto.getRandomValues(
    new Uint8Array(16)
  );

  /**
   * This function converts a number into hex format.
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

    /**
     * If the hex number only has 1 digit (for example
     * 10 = 'a' in hex), add a 0 in front so that the
     * result always has 2 characters (using the same
     * example, 10 = '0a').
     */
    if (hex.length === 1) {
      hex = '0' + hex;
    }

    return hex;
  }

  /**
   * To create the uuid, we convert the 16 random numbers
   * that we generated earlier into hex format and add
   * some dashes to make it a bit easier to read.
   */
  return (
    convertToHex(randomNumbers[0]) +
    convertToHex(randomNumbers[1]) +
    convertToHex(randomNumbers[2]) +
    convertToHex(randomNumbers[3]) +
    '-' +
    convertToHex(randomNumbers[4]) +
    convertToHex(randomNumbers[5]) +
    '-' +
    convertToHex(randomNumbers[6]) +
    convertToHex(randomNumbers[7]) +
    '-' +
    convertToHex(randomNumbers[8]) +
    convertToHex(randomNumbers[9]) +
    '-' +
    convertToHex(randomNumbers[10]) +
    convertToHex(randomNumbers[11]) +
    convertToHex(randomNumbers[12]) +
    convertToHex(randomNumbers[13]) +
    convertToHex(randomNumbers[14]) +
    convertToHex(randomNumbers[15])
  );
};
