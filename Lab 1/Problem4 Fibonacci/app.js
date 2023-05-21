function getFibonacci(n) {
    if (typeof n !== "number" || isNaN(n)) {
        return "not allowed";
    } else if (n < 1 || n > 10) {
        return "not allowed";
    } else {
        let fib = [1, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
}
