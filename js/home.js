let yearsElement = document.querySelector('.years'); // Element for displaying years
let counterStarted = false;

window.addEventListener("scroll", () => {
  if (scrollY >= 1100 && !counterStarted) {
    counterStarted = true;

    let counterYears = 0;
    let interval = setInterval(() => {
      if (counterYears <= 25) {
        yearsElement.innerHTML = counterYears + "+";
        counterYears++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  } 
});
