from collections import deque


class Node:
    def __init__(self, value):
        self.info = value
        self.left = None
        self.right = None


def swapNodes(indexes, queries):

    def create(root, indexes):
        queue = deque([root])
        # traverse indexes
        for x, y in indexes:
            temp = queue.popleft()
            # left child
            if x != -1:
                temp.left = Node(x)
                queue.append(temp.left)

            # right child
            if y != -1:
                temp.right = Node(y)
                queue.append(temp.right)

        return root

    def swap(root, k, level, l):
        if root:
            if level % k == 0:
                root.left, root.right = root.right, root.left

            swap(root.left, k, level + 1, l)
            l.append(root.info)
            swap(root.right, k, level + 1, l)

    # create root node
    root = Node(1)

    # create tree from indexes
    root = create(root, indexes)

    # process queries
    result = []
    for k in queries:
        l = []
        swap(root, k, 1, l)
        result.append(l)

    return result
