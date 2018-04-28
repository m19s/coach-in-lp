(function() {
  $("#about").on("inview", function(event, isInView) {
    if (isInView) {
      const textArray = "what's coach-in";
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
      const textArray = "How to use";
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

  $("#tech").on("inview", function(event, isInView) {
    if (isInView) {
      const textArray = "Technology";
      let counter = 0;
      setInterval(function() {
        const textArrayLength = textArray.length;
        $("#tech").append(textArray[counter]);
        counter = counter + 1;
        if (counter === textArrayLength) {
          clearInterval(this);
        }
      }, 40);
    } else {
      $("#tech").empty();
    }
  });

  $("#mechanism").on("inview", function(event, isInView) {
    if (isInView) {
      const textArray = "mechanism";
      let counter = 0;
      setInterval(function() {
        const textArrayLength = textArray.length;
        $("#mechanism").append(textArray[counter]);
        counter = counter + 1;
        if (counter === textArrayLength) {
          clearInterval(this);
        }
      }, 40);
    } else {
      $("#mechanism").empty();
    }
  });
})();
