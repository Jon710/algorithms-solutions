package leetcode;

// simple implementation. T.C = O(1); S.C = O(n)
class MyHashSet {

    boolean[] arr;

    public MyHashSet() {
        arr = new boolean[1000001];
    }

    public void add(int key) {
        arr[key] = true;
    }

    public void remove(int key) {
        arr[key] = false;
    }

    /** Returns true if this set contains the specified element */
    public boolean contains(int key) {
        return arr[key];
    }
}

// better S.O with buckets and linked list
class MyHashSet {

    private final int MAX_VALUE = 1000000;
    private final int ARRAY_SIZE = 100;
    private List<List<Integer>> buckets;

    public MyHashSet() {
        buckets = new ArrayList<>(ARRAY_SIZE);
        for (int i = 0; i < ARRAY_SIZE; i++) {
            buckets.add(null);
        }
    }

    public void add(int key) {
        int index = key % ARRAY_SIZE;
        List<Integer> bucketLinkedList = buckets.get(index);
        if (bucketLinkedList == null) {
            List<Integer> list = new LinkedList<>();
            list.add(key);
            buckets.set(index, list);
        } else {
            if (!bucketLinkedList.contains(key)) {
                bucketLinkedList.add(key);
            }
        }
    }

    public void remove(int key) {
        int index = key % ARRAY_SIZE;
        List<Integer> bucketLinkedList = buckets.get(index);
        if (bucketLinkedList != null) {
            bucketLinkedList.remove(Integer.valueOf(key));
        }
    }

    /** Returns true if this set contains the specified element */
    public boolean contains(int key) {
        int index = key % ARRAY_SIZE;
        List<Integer> bucketLinkedList = buckets.get(index);

        return bucketLinkedList != null && bucketLinkedList.contains(key);
    }
}



