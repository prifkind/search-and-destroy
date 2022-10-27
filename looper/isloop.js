"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let hash = {};
  let result;

  let checkLoop = (num = 1) => {
    const node = linkedlist.getNthNode(num);

    hash[node.value] = node.value;

    if (num < 15) {
      if (node.next && hash.hasOwnProperty(node.next.value)) {
        result = true;
      } else if (node.next) {
        hash[node.next] = node.next;
        checkLoop(num + 1);
      } else {
        result = false;
      }
    }
    return result;
  };

  return checkLoop();
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
