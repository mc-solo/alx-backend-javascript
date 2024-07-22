// const or let

export function taskFirst() { } {
    const task = 'I prefer cosnt when I can.';
    return task;
}

export function getLast() {
    return ' is okay';
}

export function taskNext() { } {
    let combinaion = 'But someitems let';
    combinaion += getLast();

    return combinaion;
}