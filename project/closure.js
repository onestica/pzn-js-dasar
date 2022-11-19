function createAdder(value) {
    const owner = "Imam";
    function add(param) {
        console.info(owner)
        return value + param;
    }

    return add;
}

const addTwo = createAdder(2);
console.info(addTwo(10));
console.info(addTwo(20));