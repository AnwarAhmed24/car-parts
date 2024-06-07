
const allSkeleton = document.querySelectorAll('.skeleton');
window.addEventListener('load', function () {
  allSkeleton.forEach(item => {
    item.classList.remove('skeleton')
  })
}); 

$("#get-add-car").load("add-car.html #msform");
$(document).ready(function () {


  // https://www.linkedin.com/in/atakangk/
  //jQuery time
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50) + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale(' + scale + ')',
          'position': 'absolute'
        });
        next_fs.css({ 'left': left, 'opacity': opacity });
      },
      duration: 300,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });

  $(".previous").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = ((1 - now) * 50) + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ 'left': left });
        previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
      },
      duration: 300,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });


//=====Brand Image Slider=====//
  $('.brand-slider').slick({
        arrows: false,
        dots: false,
    autoplay:false,
    pauseOnHover:false,
    slidesToShow: 5,
    slidesToScroll: 1,

      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
      
        }

      }, {

          breakpoint: 1000,
          settings: {
            slidesToShow: 3
          }

        },{

        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          autoplaySpeed: 2000
        }

      }, {

        breakpoint: 300,
        settings: "unslick" 

      }]
        
  });

//Propuller Car Slider//
  $('.propuller-cars').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '.prev-btn',
    nextArrow:'.next-btn',
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 4
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }

    }, {

      breakpoint: 380,
      settings: {
        slidesToShow: 1
      }
    }]

  });


  //Slider For Details Page//
  $('.car-img-slider').slick({
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.img-arrow-prev',
    nextArrow: '.img-arrow-next',
    centerPadding: '0px',
    asNavFor: '.slider-nav',
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }

    }]

  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    arrows:false,
    slidesToScroll: 1,
    asNavFor: '.car-img-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        centerMode: false,
        centerPadding: '0px',
        focusOnSelect: true,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 380,
      settings: {
        slidesToShow: 3,
     
      }
    }]
    
  });


//Related Car Slider for Details Page//
  $('.related-cars').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 5
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }

    }, {

      breakpoint: 380,
      settings: {
        slidesToShow: 1
      }
    }]

  });
 
  $(".phone-call").click(function () {
    $(".hide-number").css("display", "none");
    $(".show-number").css("display", "inline");
  });


  /*Featured Car Tabs */
  $('.tabess').scrollingTabs();
 
  //Slider Search Result Listing/ /
  $('.car-search-img').slick({
    dots: true,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    centerMode: false,
    pauseOnHover: false,
    slidesToScroll: 1,

    centerPadding: '0px',
    centerMode: false,
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }

    }]

  });


  //========These JS code for the Dahsboard Profile Tab=========//
  $(".name").click(function () {
    var name_input = document.querySelector('#user-name').value;
    document.querySelector('.update-name').innerHTML = name_input;

  });

  $(".email").click(function () {
    var email_input = document.querySelector('#user-email').value;
    document.querySelector('.update-email').innerHTML = email_input;

  });

  $(".mobile").click(function () {
    var mobile_input = document.querySelector('#mobile_number').value;
    document.querySelector('.update-number').innerHTML = mobile_input;

  });


  $(".bio").click(function () {
    var date_input = document.querySelector('#user-bio').value;
    document.querySelector('.update-bio').innerHTML = date_input;

  });


  $(".address").click(function () {
    var street_input = document.querySelector('#billing_city').value;
    document.querySelector('.street-update').innerHTML = street_input;

    var city_input = document.querySelector('#billing_street').value;
    document.querySelector('.city-update').innerHTML = city_input;
  });



  //==========Pattern Selector JS Function Call=====//
  $('.mobile-pattern').slick({
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: false,
    centerMode: false,
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }

    }]
  });


  //User Dashboard Tab
  new SiTabs({
    tabClass: 'tab',
    tabbedClass: 'tabbed',
    defaultTabClass: 'tabbed_default',
    activeTabClass: 'tab_active',
    disabledTabClass: 'tab_disabled',

  });



  //Internation Phone Code//
  let phone_number = document.querySelector("#mobile_number");
  window.intlTelInput(phone_number, {
    showSelectedDialCode: true,
    initialCountry: "ae",
    //onlyCountries: ["ae", "bh", "kw", "qa", "sa", "bd"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js"
  });

  //Internation Phone Code//
  let phone_number2 = document.querySelector("#mobile_number2");
  window.intlTelInput(phone_number2, {
    showSelectedDialCode: true,
    initialCountry: "ae",
    //onlyCountries: ["ae", "bh", "kw", "qa", "sa", "bd"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js"
  });

  
  //=======Search Result Tamplate FIlter========//
  document.querySelector("#filter-show").addEventListener("click", hide_show);
  function hide_show() {
    var element = document.querySelector("#hide-filter");
    element.classList.toggle("show");

    var element2 = document.querySelector("#arrow-roted");
    element2.classList.toggle("rotate");

  }

  
  //3Dots Funciton//
  $("#read-more").on("click", function () {
    var dots = document.querySelector("#dots");
    var moreText = document.querySelector("#more");
    var btnText = document.querySelector("#read-more");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  });



  


//Car Details Slider Counter//
  var $status = $('.slider_counter');
  var $slickElement = $('.car-img-slider');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' of ' + slick.slideCount + ' Photos ');
  });


//======Click to Copy Clipboard =====//
  $("#copy-link").on("click", function () {
    var copyText = document.querySelector("#myInput1");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text

    this.innerText = "Copied";
  });

  //Car featires select detai
  var feature = $('.features').filterMultiSelect({
    selectAllText: 'Select All...',
    placeholderText: 'Select',
    filterText: 'search',
    caseSensitive: true,
  });
  





 
});

