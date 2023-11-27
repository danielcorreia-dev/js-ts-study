const reduce = (nums, fn, init) => {
  if (nums.length <= 0) return init;
  val = nums.reduce(fn, init);
  return val;
};
