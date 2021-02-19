export function findOutlier(integers: number[]): number {

  // Count how many odd numbers the array has
  let counter = integers.reduce(function (b, a) {
    return b + a % 2;
  }, 0);


  // if more than one odd number, find the only one even number, else find one odd number
  let N = 0;
  integers.forEach(function (index) {
    if (counter > 1) {
      if (index % 2 === 0) {
        N = index;
      }
    }
    else {
      if (index % 2 != 0) {
        N = index;
      }
    }
  });

  return N;
}