     const allSkeleton = document.querySelectorAll('.skeleton')

window.addEventListener('load', function () {
  allSkeleton.forEach(item => {
    item.classList.remove('skeleton')
  })
})  
  

$(document).ready(function () {


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
    disabledTabClass: 'tab_disabled'
  });


  $(function () {
    // SmartWizard initialize
    $('#smartwizard').smartWizard();
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

