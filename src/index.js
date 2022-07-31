module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let result = true;

  for (let char of str) {
    bracketsConfig.forEach(item => {
      const index = item.indexOf(char);

      if (index === -1) {
        return;
      }

      if (item[0] === item[1]) {
        checkWhenCharsAreSame(stack, item);
      } else {
        result = checkWhenCharsAreDifferent(index, stack, char, item);
      }
    });
    if (!result) {
      return result;
    }
  }
  return !stack.length;
}

function checkWhenCharsAreSame(stack, item) {
  if (stack[stack.length - 1] === item[0]) {
    stack.pop();
  } else {
    stack.push(item[0]);
  }

  return ;
}

function checkWhenCharsAreDifferent(index, stack, char, item) {
  if (index === 0) {
    stack.push(char);
  } else if (index === 1) {
    if (stack.pop() !== item[0]) {
      return false;
    }
  }

  return true;
}
