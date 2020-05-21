//function to show the projects submenu when the projects button is clicked
$(document).ready(function () {

    $("#projects").click(function () {
        var mainNav = $("#mainNav");
        var subNav = $("#projectsSubNav");

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
