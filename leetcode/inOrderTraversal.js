// 94. leetcode

// recursion 
// time: o(n), space: o(n)
const inorderTraversal = (root) => {
  const result = [];
  const walk = (node) => {
    if (node === null) return;
    walk(node.left);
    result.push(node.val);
    walk(node.right);
  }

  walk(root);

  return result;
}

// iteratively
// time: o(n), space: o(n)
const inorderTraversal = (root) => {
  const result = [];
  const track = [];

  const walk = (node) => {
    while (node) {
      track.push(node);
      node = node.left;
    };
  }

  const collect = () => {
    while (track.length > 0) {
      const top = track.pop();
      result.push(top.val);
      walk(top.right);
    }
  }

  walk(root);
  collect();

  return result;
}