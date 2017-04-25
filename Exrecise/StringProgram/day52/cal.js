function AddNums(a, b) {
    return a + b;
}

function SubNums(a, b) {
    return a - b;
}

function MultiNums(a, b) {
    return a * b;
}

function DivNums(a, b) {
    return a / b;
}

function ExpenNums(a, b) {

    return Math.pow(a, b);
}
module.exports = {
    add: AddNums,
    minus: SubNums,
    multi: MultiNums,
    div: DivNums,
    Exp: ExpenNums

}