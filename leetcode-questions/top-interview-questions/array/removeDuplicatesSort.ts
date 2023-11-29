function removeDuplicates(nums: number[]): number {
  const repeatArrs: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (repeatArrs.includes(nums[i])) {
      nums.splice(i, 1);
    } else {
      repeatArrs.push(nums[i]);
    }
  }

  return nums.length;
}
const numsArr = [1, 1, 2, 2, 3, 3, 3];
console.log(removeDuplicates(numsArr));
console.log(numsArr);
