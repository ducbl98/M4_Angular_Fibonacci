function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}
for (var i = 0; i <= 50; i++) {
    console.log(i + "." + fib(i) + " ");
}
