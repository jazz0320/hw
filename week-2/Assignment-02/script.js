const example = {
    n1: Number(prompt('輸入數字n1')),
    n2: Number(prompt('輸入數字n2')),
    op: prompt('輸入正負號')
};

function calculate(args) {
    let result;
    if (args.op === '+') {
        result = args.n1 + args.n2;
    } else if (args.op === '-') {
        result = args.n1 - args.n2;
    } else {
        result = 'Not supported'
    }
    return result;
}

function calculate1(args) {
    let result;
    if (args['op'] === '+') {
        result = args['n1'] + args['n2'];
    } else if (args['op'] === '-') {
        result = args['n1'] - args['n2'];
    } else {
        result = 'Not supported'
    }
    return result;
}

function calculate2({ n1, n2, op }) {
    let result;
    if (op === '+') {
        result = n1 + n2;
    } else if (op === '-') {
        result = n1 - n2;
    } else {
        result = 'Not supported'
    }
    return result;
}


console.log(calculate(example));
console.log(calculate1(example));
console.log(calculate2(example));