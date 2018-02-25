class Sorter {
    constructor() {
        this.arr = [];
        this.comparator = (a, b) => a - b;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return [...this.arr];
    }

    sort(indices) {

        indices.sort((a, b) => a - b);

        const newArray = indices.map(ind => this.arr[ind]);

        newArray.sort(this.comparator);
        indices.forEach((elem, i) => this.arr[elem] = newArray[i]);
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;