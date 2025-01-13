//     //IMT
//     let weightSlider = document.getElementById("myWeight");
// let weightOutput = document.getElementById("inputWeight");

// let heightSlider = document.getElementById("myHeight");
// let heightOutput = document.getElementById("inputHeight");

// weightOutput.innerHTML = weightSlider.value;
// heightOutput.innerHTML = heightSlider.value;

// weightSlider.oninput = function () {
//   weightOutput.innerHTML = this.value;
// }
// heightSlider.oninput = function () {
//   heightOutput.innerHTML = this.value;
// }

// function showValWeight(newVal) {
//   weightSlider.value=newVal;
// };

// function showValHeight(newVal) {
//   heightSlider.value=newVal;
// };

// weightSlider.addEventListener("input", updateValueWeight);
// heightSlider.addEventListener("input", updateValueHeight);
// function updateValueWeight(e) {
//   weightOutput.value = e.srcElement.value;
// }
// function updateValueHeight(e) {
//   heightOutput.value = e.srcElement.value;
// }

// function calculateBmi() {
//   let weight = document.bmiForm.realweight.value;
//   let height = (document.bmiForm.realheight.value)/100;
//   let realbmi = (weight)/Math.pow(height, 2);
//   let realbmiOutput = document.getElementById("yourbmi");
//   let messageOutput = document.getElementById("evaluationMessage");
//   let roundedBmi = realbmi.toFixed(1);
//   messageOutput.innerHTML = "";
//   realbmiOutput.innerHTML = " " + roundedBmi;
//   if (roundedBmi > 26) {
//     messageOutput.innerHTML = "<br>Start workout";
//   }
// }

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



})(jQuery);

