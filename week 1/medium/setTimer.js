function calculateTime(n) {
    let sum = 0;
    console.time("time1");
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.timeEnd("time1");
}

calculateTime(1000000);
