export function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

export function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) traversePreOrder(node.left, list);
  if (node.right) traversePreOrder(node.right, list);
  return list;
}

export function traverseInOrder(node, list) {
  if (node.left) traverseInOrder(node.left, list);
  list.push(node.value);
  if (node.right) traverseInOrder(node.right, list);
  return list;
}

export function traversePostOrder(node, list) {
  if (node.left) traversePostOrder(node.left, list);
  if (node.right) traversePostOrder(node.right, list);
  list.push(node.value);
  return list;
}
