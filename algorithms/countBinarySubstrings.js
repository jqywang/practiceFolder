var countBinarySubstrings = function (s) {
  let holder = [0];
  let counter = 0;
  let current = s[0];
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== current) {
      current = s[i];
      counter++;
      holder.push(0);
    }
    holder[counter]++;
  }
  for(let j = 0; j < holder.length - 1; j++) {
    total += Math.min(holder[j], holder[j+1]);
  }
  return total
};
