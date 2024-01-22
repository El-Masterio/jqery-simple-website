$(document).ready(function () {
  $("#js-hamburger").click(function () {
    $("#js-top-line").toggleClass("active");
    $("#js-center-line").toggleClass("active");
    $("#js-bottom-line").toggleClass("active");
    $("#js-nav").toggleClass("show");
  });

  //////************* Smooth transition in between pages in navbar *************//////////

  $(".navigation .linkNav").on("click", function (e) {
    let sectionSelector = $(e.target).attr("href");
    let sectionOffset = $(sectionSelector).offset().top;
    console.log(sectionOffset);
    $("body,html").animate(
      {
        scrollTop: `${sectionOffset}px`,
      },
      4000
    );
  });

  ////////////////////**********   Accordion          *********////////////////////
  //TODO: need to work on the according more
  $(".item-header").click(function () {
    // $(".accordion-item").removeClass("active");
    $(this).parent().toggleClass("active", 500);
  });

  ///////////////////////////* Duration *////////////////////////////

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2026").getTime();
  console.log(countDownDate);

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    //   console.log(now);

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    //   console.log(distance);

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //assigning the output to the right places

    document.getElementById("days").innerHTML = `${days} D`;
    document.getElementById("hours").innerHTML = `${hours} h`;
    document.getElementById("minutes").innerHTML = `${minutes} m`;
    document.getElementById("seconds").innerHTML = `${seconds} s`;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  ///////////************ Contact ***********/////////

  const maxLength = 100;
  $("#contact-text").keyup(function () {
    const currentLength = $(this).val().length;
    let remainingChar = maxLength - currentLength;

    if (remainingChar <= 0) {
      $("#chars").text("No Remaining characters");
    } else {
      $("#chars").text(`${remainingChar} Character Remaining`);
    }
  });

  /* TODO: Forlater Study

// const date = new Date();
// console.log(date);
// date.toLocaleTimeString();
// console.log(date);

// const myinterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
//   //   console.log(date);
// }

// console.log(myinterval);

*/
});
