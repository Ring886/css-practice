function fn(root) {
  const result = []
  function dfs(root) {
    if(!root) return 
    result.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
}

function fn1(tree) {
  const result = []
  tree = tree[0]
  const obj = {
    id: tree.id,
    name: tree.name,
    parentId: null
  }
  result.push(obj)
  function dfs(tree, parentId) {
    if(!tree) return
    for(let node of tree) {
      const node1 = {
        id: node.id,
        name: node.name,
        parentId: parentId
      }
      result.push(node1)
      dfs(node.children, node.id)
    }
  }
  dfs(tree.children, tree.id)
  return result
}
const tree = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 1.1",
        children: [
          { id: 4, name: "Node 1.1.1" },
          { id: 5, name: "Node 1.1.2" },
        ],
      },
      {
        id: 3,
        name: "Node 1.2",
      },
    ],
  },
];


console.log(fn1(tree))