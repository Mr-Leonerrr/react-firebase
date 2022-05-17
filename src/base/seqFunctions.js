export function sum(a = 0, b = 0) {
    return a + b;
}

export function age(birthYear = 2022) {
    return new Date().getFullYear() - birthYear
}

export function returnObject(name = "", lastName = "") {
    return {
        name,
        lastName
    };
}

export function returnArray (name = "", lastName = "") {
    return [name, lastName];
}

//arg should be a number
export function isEven(arg) {
    return arg % 2 === 0;
}