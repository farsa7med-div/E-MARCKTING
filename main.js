$(window).scroll(function() {
  var top_of_element = $(".counter").offset().top;
  var bottom_of_element = $(".counter").offset().top + $(".counter").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    $('.counter-count').each(function () {
      var $this = $(this);
      if (!$this.hasClass('counted')) {
        $this.addClass('counted');
        var final_count = parseInt($this.text(), 10);
        var count = 0;
        var speed = Math.ceil(final_count / 50);
        var refresh_interval = setInterval(function () {
          if (count < final_count) {
            count += speed;
            if (count > final_count) {
              count = final_count;
            }
            $this.text(count);
          } else {
            clearInterval(refresh_interval);
          }
        }, 30);
      }
    });
  }
});


window.onscroll = function () {
  var header = document.getElementById("navbar");
  if (window.pageYOffset > 5) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};



function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent =
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
  document
    .querySelector("#progress-bar")
    .style.setProperty("--progress", scrollPercent);
}

document.addEventListener("scroll", updateProgressBar);