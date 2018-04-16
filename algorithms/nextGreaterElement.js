var nextGreaterElement = function (findNums, nums) {
  let sortedNums = nums.sort();
  let resultArray = [];
  for(let i = 0; i < findNums.length; i++) {
    if(findNums[i] >= sortedNums[sortedNums.length - 1]) {
      resultArray.push(-1);
    } else {
      resultArray.push(binarySearch(findNums[i], sortedNums));
    }
  }
  return resultArray;
};
let binarySearch = (item, array) => {
  let mid = Math.floor(array.length / 2);
  if(array[mid] < item){
    return binarySearch(item, array.slice(mid + 1));
  }else if (array[mid] === item) {
    return array[mid + 1];
  }else {
    debugger;
    if(array[mid - 1] === undefined || array[mid - 1] <= item) {
      return array[mid];
    } else {
      return binarySearch(item, array.slice(0, mid));
    }
  }
}
