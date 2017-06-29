// given a string of Brackets determine if they are balenced

const bracketMatches = { '{': '}', '[': ']', '(': ')' };

function isBalanced(bracketString) {
  if (bracketString.length % 2 !== 0) {
    return false;
  }

  const bracketArray = bracketString.split('');
  for (let i = 0, u = bracketArray.length - 1; u >= bracketArray.length / 2; i++, u--) {
    if (bracketMatches[bracketArray[i]] !== bracketArray[u]) {
      return false;
    }
  }
  return true;
}

function isBalancedWithStack(bracketString) {
  const bracketArray = bracketString.split('');
  const openingStack = [];

  for (const currentBracket of bracketArray) {
    if (currentBracket === '{' || currentBracket === '(' || currentBracket === '[') {
      openingStack.push(currentBracket);
    } else {
      const openingBracket = openingStack.pop();
      if (bracketMatches[openingBracket] !== currentBracket) {
        return false;
      }
    }
  }
  return true;
}

console.log(isBalancedWithStack('{[()]}'));
console.log(isBalancedWithStack('{[(])}'));
console.log(isBalancedWithStack('{{[[(())]]}}'));
