/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}


var kWeakestRows = function (mat, k) {
    let mp = [];
    // let q = new PriorityQueue();

    for (let i = 0; i < mat.length; i++) {
        let min = 0, max = mat[i].length - 1, med, ones = -1;
        let arr = mat[i];
        while (max >= min) {
            med = parseInt((max + min) / 2);
            if (arr[med] == 1) {
                min = med + 1
                ones = med;
            }
            else if (arr[med] == 0) {
                max = med - 1
            }
        }
        // if (ones >= 0)
        mp.push([i, ones])
        // q.push(-ones)
        // console.log(ones, i)

    }

    return mp.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]).slice(0, k).map(item => item[0])


    // return sum


};

console.log(kWeakestRows(
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]],
    3))