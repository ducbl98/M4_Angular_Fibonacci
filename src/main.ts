function fib(n:number):number {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

for (let i = 0; i <= 50; i++) {
    console.log(i+"."+fib(i)+" ");
}