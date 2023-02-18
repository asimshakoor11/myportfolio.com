

let index = 0;
const totalWorkItems = $(".work-item").length;

    $(window).on("load",function(){
        $(".preloader").addClass("loaded");
    })

$(document).ready(function () {

    //nav toggle
    $(".nav-toggle").click(function () {
        $(".header .nav").slideToggle();
    })

    $(".header .nav a").click(function () {
        if ($(window).width() < 768) {
            $(".header .nav").slideToggle();
        }
    })
    //fixed header{
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".header").addClass("fixed");
        }
        else {
            $(".header").removeClass("fixed");
        }
    })

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // set lightbox img max height 
    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height", wHeight + "px");

    //lightbox
    $(".work-item-inner").click(function () {
        index = ($(this).parent(".work-item").index());
        $(".lightbox").addClass("open")
        lightboxSlideShow();
    })

    $(".lightbox .prev").click(function () {
        if (index == 0) {
            index = totalWorkItems - 1;
        }
        else {
            index--;
        }
        lightboxSlideShow();
    })

    $(".lightbox .next").click(function () {
        if (index == totalWorkItems - 1) {
            index = 0;
        }
        else {
            index++;
        }
        lightboxSlideShow();
    })

    $(".lightbox-close").click(function () {
        $(".lightbox").removeClass("open");
    })

    $(".lightbox").click(function (event) {
        if ($(event.target).hasClass("lightbox")) {
            $(this).removeClass("open");
        }
    })


})

function lightboxSlideShow() {
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();

    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totalWorkItems + "/" + (index + 1));
}


// ******sending email 

function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const servieID = "service_3myjm7y";
    const templateID = "template_b0wznsl";

    emailjs
        .send(servieID, templateID, params)
        .then((res) => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("Your Messsage Sent Successfully!")

        })
        .catch((err) => console.log(err));
}
