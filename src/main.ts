const addEmailListener = () => {
  const emailInput = document.querySelector("#bd-email") as HTMLInputElement;
  const audio = new Audio("chalkboard.mp3");
  audio.preload = "auto";
  const goodChalkStarts = [2, 3.5, 5.8, 7, 8.4, 9.2];
  let lastVal = emailInput.value;
  if (!emailInput) return;
  emailInput.addEventListener("value", (event) => {
    const currVal = event.target.value;
    if (currVal.length) {
      lastVal = currVal;
      return;
    }
    lastVal = currVal;
    let isChalking = false;
    const playChalk = () => {
      // one at a time
      if (isChalking) return;
      const start =
        goodChalkStarts[Math.floor(Math.random() * goodChalkStarts.length)];
      audio.currentTime = start;
      audio.play();
      setTimeout(() => {
        audio.pause();
        isChalking = false;
      }, 500);
    };
    // Play a random 0.5s segment from chalkboard.mp3
    audio.addEventListener("loadedmetadata", playChalk);
    // If metadata is already loaded
    if (audio.readyState >= 1) {
      playChalk();
    }
  });
};

addEmailListener();
