/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  if (preferences.length < 3) {
    return count;
  } else {
    for (let i = 0; i < preferences.length; i++) {
      let first = preferences[i];
      let second = preferences[preferences[i] - 1];
      let third = preferences[preferences[preferences[i] - 1] - 1];
      if (first !== second && second !== third && third == i + 1) {
        count++;
      }
    }
    return count / 3;
  }
};
