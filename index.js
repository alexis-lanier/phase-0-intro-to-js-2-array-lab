const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendCat = [...cats, name];
    return appendCat;
}

function prependCat(name) {
    const prependCat = [name, ...cats];
    return prependCat;
}

function removeLastCat() {
    const removed = cats.slice(0, cats.length-1);
    return removed;
}

function removeFirstCat() {
    const removeFirst = cats.slice(1, cats.length);
    return removeFirst;
}