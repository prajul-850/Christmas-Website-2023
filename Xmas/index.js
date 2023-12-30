
function showRemaining() {
        let end = new Date('12/25/2023 0:0 AM');
        let now = new Date();
        let distance = end - now;
        let _second = 1000;
        let _minute = _second * 60;
        let _hour = _minute * 60;
        let _day = _hour * 24;
        let d = Math.floor(distance / _day);
        let h = Math.floor((distance % _day) / _hour);
        let m = Math.floor((distance % _hour) / _minute);
        let s = Math.floor((distance % _minute) / _second);

  document.getElementById("clock")
    .innerHTML =
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}    

    timer = setInterval(showRemaining, 1000);