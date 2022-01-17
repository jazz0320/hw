const n1 = [1, 2, 4, 5];
const n2 = [5, 2, 7, 1, 6]

function max(numbers) {
    var outcome = numbers[0];
    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] > outcome) {
            outcome = numbers[i];
        }
    }
    return outcome;
}

console.log(max(n1));
console.log(max(n2))