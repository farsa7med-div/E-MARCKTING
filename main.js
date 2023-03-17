// /* ! pragres top web page*/
$(window).scroll(function () {
  var top_of_element = $(".counter").offset().top;
  var bottom_of_element =
    $(".counter").offset().top + $(".counter").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    $(".counter-count").each(function () {
      var $this = $(this);
      if (!$this.hasClass("counted")) {
        $this.addClass("counted");
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
// /* ! end pragres top web page*/
// show back grund navbar on scroll
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
//  end show back grund navbar on scroll
















// work in progress - needs some refactoring and will drop JQuery i promise :)
var instance = $(".hs__wrapper");
$.each( instance, function(key, value) {
    
  var arrows = $(instance[key]).find(".arrow"),
      prevArrow = arrows.filter('.arrow-prev'),
      nextArrow = arrows.filter('.arrow-next'),
      box = $(instance[key]).find(".hs"), 
      x = 0,
      mx = 0,
      maxScrollWidth = box[0].scrollWidth - (box[0].clientWidth / 2) - (box.width() / 2);

  $(arrows).on('click', function() {
      
    if ($(this).hasClass("arrow-next")) {
      x = ((box.width() / 2)) + box.scrollLeft() - 10;
      box.animate({
        scrollLeft: x,
      })
    } else {
      x = ((box.width() / 2)) - box.scrollLeft() -10;
      box.animate({
        scrollLeft: -x,
      })
    }
      
  });
    
  $(box).on({
    mousemove: function(e) {
      var mx2 = e.pageX - this.offsetLeft;
      if(mx) this.scrollLeft = this.sx + mx - mx2;
    },
    mousedown: function(e) {
      this.sx = this.scrollLeft;
      mx = e.pageX - this.offsetLeft;
    },
    scroll: function() {
      toggleArrows();
    }
  });

  $(document).on("mouseup", function(){
    mx = 0;
  });
  
  function toggleArrows() {
    if(box.scrollLeft() > maxScrollWidth - 10) {
        // disable next button when right end has reached 
        nextArrow.addClass('disabled');
      } else if(box.scrollLeft() < 10) {
        // disable prev button when left end has reached 
        prevArrow.addClass('disabled')
      } else{
        // both are enabled
        nextArrow.removeClass('disabled');
        prevArrow.removeClass('disabled');
      }
  }
  
});