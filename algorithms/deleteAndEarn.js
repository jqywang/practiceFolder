var deleteAndEarn = function (nums) {
  let numObj = {};
  let total = 0;
  nums.forEach((element) => {
    if(numObj[`${element}`] === undefined) {
      numObj[`${element}`] = 1;
    } else {
      numObj[`${element}`]++;
    }
  });
  let fullArray = Object.keys(numObj).sort();
  let consecutivesArray = [];
  let startingIndex = 0;
  for(let i = 0; i < fullArray.length; i++) {
    if(parseInt(fullArray[i]) + 1 !== parseInt(fullArray[i+1])) {
      consecutivesArray.push(fullArray.slice(startingIndex, i + 1));
      startingIndex = i + 1;
    }
  }
  consecutivesArray.forEach(element => {
    let odds = 0;
    let evens = 0;
    for(let i = 0; i < element.length; i++) {
      if(parseInt(element[i]) % 2 === 0){
        evens += parseInt(element[i]) * numObj[element[i]];
      } else {
        odds += parseInt(element[i]) * numObj[element[i]];
      }
    }
    total += Math.max(odds, evens);
  });
  console.log(total)
  return total;
};

deleteAndEarn([3, 4, 5, 2]);