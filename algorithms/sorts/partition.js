/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.

  Steps:

  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.

  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).

  3. return: the index where the left section of smaller items ends.

  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(nums, left = 0, right = nums.length - 1) {
  const midIdx = Math.floor((left + right) / 2);
  const pivotVal = nums[midIdx];
  let leftIdx = left;
  let rightIdx = right;

  while (true) {
    while (nums[leftIdx] < pivotVal) {
      // It's already smaller, so it's in the right spot, skip it.
      leftIdx += 1;
    }

    while (nums[rightIdx] > pivotVal) {
      // it's already larger, it's in the right spot, skip it.
      rightIdx -= 1;
    }

    if (leftIdx >= rightIdx) {
      return rightIdx;
    }

    // Destructure swap syntax to swap the item at leftIdx with the item at rightIdx
    [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];

    leftIdx += 1;
    rightIdx -= 1;
  }
}

module.exports = {
  partition,
};

/**
 * The lomuto partition scheme does on average 3x more swaps than Hoare's
 * scheme.
 * @param {Array<number>} nums
 * @param {number} low Start of section to partition.
 * @param {number} hi End of section to partition.
 */
function partitionLomuto(nums = [], low = 0, hi = nums.length - 1) {
  const pivot = nums[hi];
  let i = low - 1;

  for (let j = low; j < hi; j++) {
    if (nums[j] <= pivot) {
      i += 1;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // final swap of pivot into correct position
  [nums[i + 1], nums[hi]] = [nums[hi], nums[i + 1]];
  return i + 1;
}
