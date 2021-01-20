var binaryTreePaths = function(root) {
    const result = [] // ["1,2,5", "1,3"]
    const preOrder = (node, path) => {
        if(!node) {
            return;
        }
        if(node.left == null && node.right == null) {
            path.push(node.val);
            result.push(path.join("->"));
            path.pop();
            return;
        }
        path.push(node.val)
        preOrder(node.left, path);
        preOrder(node.right, path);
        path.pop();
    }
    preOrder(root, []);
    return result;
};