const numbersArray = [1, 2, 3, 4, 5];

const squareIterator = {
    array: numbersArray,
    index: 0,
    next() {
        if (this.index < this.array.length) {
            const value = this.array[this.index] ** 2;
            this.index++;
            return { value, done: false };
        } else {
            return { done: true };
        }
    }
};

// Example usage:
let result = squareIterator.next();
while (!result.done) {
    console.log(result.value);
    result = squareIterator.next();
}
