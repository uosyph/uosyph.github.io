
// scroll to a part of the page
$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 700, 'linear');
    });
});

// scroll to the top of the page
$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800, 'linear');
});