(function() {
  $("#about").on("inview", function(event, isInView) {
    if (isInView) {
      const textArray = "coach-inについて";
      let counter = 0;
      setInterval(function() {
        const textArrayLength = textArray.length;
        $("#about").append(textArray[counter]);
        counter = counter + 1;
        if (counter === textArrayLength) {
          clearInterval(this);
        }
      }, 40);
    } else {
      $("#about").empty();
    }
  });

  $("#howto").on("inview", function(event, isInView) {
    if (isInView) {
      const textArray = "How To Use";
      let counter = 0;
      setInterval(function() {
        const textArrayLength = textArray.length;
        $("#howto").append(textArray[counter]);
        counter = counter + 1;
        if (counter === textArrayLength) {
          clearInterval(this);
        }
      }, 40);
    } else {
      $("#howto").empty();
    }
  });
})();
