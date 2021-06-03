# solving with recursion
# calculate height of left subtree and height of right subtree.
# we return whichever is the max and add 1 to it.


def height(root):
    if root is None:
        return -1
    else:
        return 1 + max(height(root.left), height(root.right))
