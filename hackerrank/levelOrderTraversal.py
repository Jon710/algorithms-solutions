# using queue to solve it

from collections import deque


def levelOrder(root):
    queue = deque([root])  # init queue with root element

    while len(queue):
        root = queue.popleft()
        print(root, end=" ")

        # explore next level
        if root.left:
            queue.append(root.left)
        if root.right:
            queue.append(root.right)
