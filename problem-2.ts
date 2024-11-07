const removeDuplicates = (numbers: number[]): number[] => {
  return [...new Set(numbers)];
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 0, 0, 10, 10, 20]));
    