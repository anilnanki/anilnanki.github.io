const countdown = () => {
    // Specify the date and time we are counting down to.
    const countDate = new Date("May 6, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const textdays = Math.floor(remainingTime / days);
    const texthours = Math.floor((remainingTime % days) / hours);
    const textminutes = Math.floor((remainingTime % hours) / minutes);
    const textseconds = Math.floor((remainingTime % minutes) / seconds);

    document.querySelector(".days").innerText = textdays > 0 ? textdays : 0;
    document.querySelector(".hours").innerText = texthours > 0 ? texthours : 0;
    document.querySelector(".minutes").innerText = textminutes > 0 ? textminutes : 0;
    document.querySelector(".seconds").innerText = textseconds > 0 ? textseconds : 0;
  };

  // should use 500 as setInterval won't always run on time.
  setInterval(countdown, 500);