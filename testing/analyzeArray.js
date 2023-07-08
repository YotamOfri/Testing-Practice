function analyzeArray(array) {
  let object = {};
  for (num of array) {
    if (typeof num !== "number") return "not an array";
    object.average = object.average === undefined ? num : object.average + num;
    object.min =
      object.min === undefined ? num : object.min > num ? num : object.min;
    object.max =
      object.max === undefined ? num : object.max < num ? num : object.max;
  }
  object.length = array.length;
  object.average /= object.length;
  return object;
}

module.exports = analyzeArray;
