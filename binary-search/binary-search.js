"use strict";

// The idea is to keep splitting the array to reduce the number of times you need to loop

const binarySearch = (array, target) => {
  const middle = Math.floor(array.length / 2);
  const new1 = array.slice(0, middle);
  const new2 = array.slice(middle);

  // Can be consolidated to check if the target <> than middle
  if (target === new1[new1.length - 1] || target === new2[0]) {
    return true;
  } else if (target <= new1[new1.length - 1]) {
    for (let i = 0; i < new1.length; i++) {
      if (new1[i] === target) return true;
    }
  } else if ((target) => new1[new1.length - 1]) {
    for (let i = 0; i < new1.length; i++) {
      if (new2[i] === target) return true;
    }
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
