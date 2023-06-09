export default function getSidebar (allDocs = []) {
  if (!allDocs.length) return [];

  const tree = [];

  // 创建一个辅助函数来查找或创建指定路径的节点
  function findOrCreateNode(nodes, path, title, slug) {
    const parts = path.split('/').filter(item => !!item); // 将路径拆分为部分

    let currentNode = nodes;
    for (let i = 0; i < parts.length; i++) {
      const existingNode = currentNode.find(node => node.text === parts[i]);

      if (existingNode) {
        currentNode = existingNode.items || [];
      } else {
        const newNode = { text: parts[i] };
        currentNode.push(newNode);
        currentNode = newNode.items = [];
      }
    }

    if (title && slug) {
      currentNode.push({ text: title, link: `/Docs/${slug}` });
    }

    return currentNode;
  }

  // 遍历输入的数据结构
  for (const item of allDocs) {
    findOrCreateNode(tree, item.directory?.[0], item.title, item.slug);
  }
  return tree;
}