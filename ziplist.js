const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(array1, array2) {
  const finalArray = [];
  for (let i = 0; i < array1.length; i++) {
    finalArray.push(array1[i], array2[i]);
  }
  return finalArray;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
}

console.log(zipListTheSimpleWay(list1, list2));
