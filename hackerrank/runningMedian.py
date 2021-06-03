from heapq import heappop, heappush


def runningMedian(a):
    # Write your code here
    min_heap = []
    max_heap = []
    result = []

    def add_num(num, min_heap, max_heap):
        if not max_heap or num < -max_heap[0]:
            heappush(max_heap, -num)
        else:
            heappush(min_heap, num)

    def balance(min_heap, max_heap):
        if len(min_heap) - len(max_heap) >= 2:
            heappush(max_heap, -heappop(min_heap))
        if len(max_heap) - len(min_heap) >= 2:
            heappush(min_heap, -heappop(max_heap))

    def get_median(min_heap, max_heap):
        if len(min_heap) == len(max_heap):
            return (min_heap[0] - max_heap[0]) / 2
        elif len(min_heap) > len(max_heap):
            return float(min_heap[0])
        else:
            return float(-max_heap[0])

    for num in a:
        add_num(num, min_heap, max_heap)
        balance(min_heap, max_heap)
        result.append(get_median(min_heap, max_heap))

    return result
