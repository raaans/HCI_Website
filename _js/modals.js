//function to show a video or piece of code when the appropriate button is clicked
$(document).ready(function () {

    $(".videoButt").click(function () { //when a button of the class 'videoButt' is clicked...
        var vButt = $(".videoButt"); //create variable for the video button
        var video = $(".videoContainer"); //create variable for the video container

        mainNav.removeClass("navVisible");
        mainNav.addClass("navHidden");
        subNav.addClass("navVisible");
        subNav.removeClass("navHidden");
    });

    $("#workshops").click(function () {
        var mainNav = $("#mainNav");
        var subNav = $("#workshopsSubNav");

        mainNav.removeClass("navVisible");
        mainNav.addClass("navHidden");
        subNav.addClass("navVisible");
        subNav.removeClass("navHidden");
    });

    $("#projNavBack").click(function () {
        var mainNav = $("#mainNav");
        var subNav = $("#projectsSubNav");

        mainNav.removeClass("navHidden");
        mainNav.addClass("navVisible");
        subNav.removeClass("navVisible");
        subNav.addClass("navHidden");
    });

    $("#workNavBack").click(function () {
        var mainNav = $("#mainNav");
        var subNav = $("#workshopsSubNav");

        mainNav.removeClass("navHidden");
        mainNav.addClass("navVisible");
        subNav.addClass("navHidden");
        subNav.removeClass("navVisible");

    });
});
