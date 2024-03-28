function myClockForSeconds(seconds) {
    console.log(seconds);

    setTimeout(() => {
        myClockForSeconds(seconds + 1);
    }, 1000);

}

myClockForSeconds(0);
