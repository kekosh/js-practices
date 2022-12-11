for (let num = 1; num <= 20; num++){
    console.log(print_msg(num))
}

function print_msg(num) {
    const FIZZ = "Fizz";
    const BUZZ = "Buzz";

    if (num % 3 == 0 && num % 5 == 0) {
        return FIZZ + BUZZ;
    }

    if (num % 3 == 0) {
        return FIZZ;
    }

    if (num % 5 == 0) {
        return BUZZ;
    }

    return num;
}