const removeDuplicates = (nums: number[]): number[] => {
  return Array.from(new Set(nums));
};

const newArr:number[] = removeDuplicates([1,1,1,1,2,2,2,2,3,4,5,5]);
console.log(newArr);