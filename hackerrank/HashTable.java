package com.algorithms;

public class HashTable {

    private int INITIAL_SIZE = 18;
    private HashEntry[] data; //linked list

    HashTable() {
        data = new HashEntry[INITIAL_SIZE];
    }

    private int getIndex(String key) {
        int hashCode = key.hashCode();

        int index = (hashCode & 0x7fffffff) % INITIAL_SIZE;

        return index;
    }

    public void put(String key, String value) {

        // get index
        int index = getIndex(key);

        // create linked list
        HashEntry entry = new HashEntry(key, value);

        if (data[index] == null) {
            data[index] = entry;
        } else { // handle collision by adding element to the end of the linked list
            HashEntry entries = data[index];

            while (entries.next != null) {
                entries = entries.next;
            }

            entries.next = entry;
        }
    }

    public String get(String key) {
        int index = getIndex(key);

        HashEntry entries = data[index];

        if (entries != null) {
            while (!entries.key.equals(key) && entries.next != null) {
                entries = entries.next;
            }

            return entries.value;
        }

        return null;
    }
}

