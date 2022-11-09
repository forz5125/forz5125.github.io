$(document).ready(function () {


    $(".loaderArea").css("display", "none");

   
    function calculate() {
        let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());
        let days = parseInt($("#selectSite option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptive option:selected").attr("days"));
        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function () {
        calculate();
    });


    $("a[href^='#']").click(function () {
        let _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });


    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();


        $('.section').each((i, el) => {

            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }

        });
    });


    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');

    elements.each((i, el) => {
        observer.observe(el);
    });


    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }


    let optionsImg = {
        threshold: [0.5]
    };
    let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
    let elementsImg = $('.lazy_image');

    elementsImg.each((i, el) => {
        observerImg.observe(el);
    });


    function onEntryImg(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.src = change.target.dataset.src;
            }
        });
    }


    let optionsStat = {
        threshold: [0.5]
    };
    let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
    let elementsStat = $('.statAnimation');

    elementsStat.each((i, el) => {
        observerStat.observe(el);
    });


    function onEntryStat(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                if (!$('.statAnimation').hasClass("done")) {
                    $('.statAnimation').addClass("done");
                    $('.statAnimation').spincrement({
                        thousandSeparator: "",
                        duration: 3000
                    });
                }
            }
        });
    }


    $('.image-link').magnificPopup({
        type: 'image'
    });


    setTimeout(function () {
        const myModal = new bootstrap.Modal('#myModal', {
            keyboard: false
        });
        modalToggle = document.getElementById('toggleMyModal');
        myModal.show(modalToggle);

    }, 1000);
});
